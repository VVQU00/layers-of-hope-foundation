import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  HeartHandshake,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
            We&apos;re Here to Listen.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Reach out with questions, partnership ideas, volunteer interest,
            or suggestions for resources the MF and CTCL community needs.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
              Get in Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Tell us how we can help.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Layers of Hope Foundation is still growing. Your questions,
              experiences, and ideas can help shape what we build next.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={<Mail className="h-6 w-6" />}
                title="General Inquiries"
                text="info@layersofhopefoundation.org"
              />

              <ContactItem
                icon={<HeartHandshake className="h-6 w-6" />}
                title="Volunteer Interest"
                text="Tell us how you would like to contribute."
              />

              <ContactItem
                icon={<Users className="h-6 w-6" />}
                title="Partnerships"
                text="Clinicians, researchers, organizations, and community leaders are welcome to connect."
              />

              <ContactItem
                icon={<MessageSquare className="h-6 w-6" />}
                title="Resource Suggestions"
                text="Share the guides, tools, or support programs you wish existed."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="First Name" name="firstName" />
                <Field label="Last Name" name="lastName" />
              </div>

              <Field label="Email Address" name="email" type="email" />

              <div>
                <label
                  htmlFor="topic"
                  className="text-sm font-semibold text-slate-800"
                >
                  What are you reaching out about?
                </label>

                <select
                  id="topic"
                  name="topic"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
                >
                  <option>General question</option>
                  <option>Volunteer interest</option>
                  <option>Partnership opportunity</option>
                  <option>Resource suggestion</option>
                  <option>Media inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-teal-800"
              >
                Send Message
              </button>

              <p className="text-sm leading-6 text-slate-500">
                This form is currently a visual preview. We&apos;ll connect
                message delivery next.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
      />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}