"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

const contactOptions = [
  {
    title: "General Questions",
    description:
      "Contact us with questions about Layers of Hope, our mission, future programs, or ways to become involved.",
    detail: "General inquiries",
  },
  {
    title: "Community Support",
    description:
      "Reach out to learn more about future patient, caregiver, and family support opportunities.",
    detail: "Patients and caregivers",
  },
  {
    title: "Partnerships",
    description:
      "Connect with us about nonprofit partnerships, healthcare collaborations, sponsorships, or community initiatives.",
    detail: "Organizations and professionals",
  },
];

const validTopics = new Set([
  "general",
  "community",
  "story",
  "volunteer",
  "partnership",
  "donation",
  "other",
]);

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic") ?? "";

    if (validTopics.has(topic)) {
      setSubject(topic);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Your message could not be sent."
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your message was sent successfully. We will respond as soon as possible.",
      });

      form.reset();
      setSubject("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              Contact Us
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We would love to hear from you.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Whether you have a question, want to share your story, explore a
              partnership, or support our mission, use the form below to connect
              with Layers of Hope.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                {option.detail}
              </span>

              <h2 className="mt-4 text-2xl font-bold text-slate-950">
                {option.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Get in Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Send us a message.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Layers of Hope is currently growing its community, programs, and
              partnerships. We welcome messages from patients, caregivers,
              healthcare professionals, researchers, volunteers, and
              supporters.
            </p>

            <div className="mt-8 rounded-3xl border border-teal-200 bg-teal-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Response time
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                We will respond as soon as possible. Please do not use this form
                for medical emergencies or urgent medical advice.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-slate-800"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                  placeholder="First name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-slate-800"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-800"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-slate-800"
              >
                What are you contacting us about?
              </label>

              <select
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="general">
                  General question
                </option>

                <option value="community">
                  Community support
                </option>

                <option value="story">
                  Share my story
                </option>

                <option value="volunteer">
                  Volunteer
                </option>

                <option value="partnership">
                  Partnership
                </option>

                <option value="donation">
                  Donation question
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-800"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={7}
                disabled={isSubmitting}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                placeholder="Tell us how we can help."
              />
            </div>

            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 rounded-2xl border px-5 py-4 text-sm font-medium ${
                  status.type === "success"
                    ? "border-teal-200 bg-teal-50 text-teal-800"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-teal-400 sm:w-auto"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              By submitting this form, you agree that Layers of Hope Foundation
              may use the information provided to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-teal-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
            Support Our Mission
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Help us build a stronger future for patients and families.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100">
            Your support helps Layers of Hope grow its educational, community,
            advocacy, and research initiatives.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/get-involved"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-teal-950 transition hover:bg-teal-50"
            >
              Get Involved
            </Link>

            <Link
              href="/donate"
              className="rounded-full border border-teal-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-900"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}