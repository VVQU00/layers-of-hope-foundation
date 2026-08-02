import Link from "next/link";

const waysToHelp = [
  {
    number: "01",
    title: "Volunteer",
    description:
      "Support future events, awareness campaigns, fundraising efforts, and community outreach as our organization grows.",
  },
  {
    number: "02",
    title: "Become a Partner",
    description:
      "Healthcare providers, nonprofits, researchers, and businesses can work alongside Layers of Hope to expand our impact.",
  },
  {
    number: "03",
    title: "Fundraise",
    description:
      "Create your own fundraiser or organize a community event to help support education, advocacy, and future patient programs.",
  },
];

const opportunities = [
  {
    title: "Corporate Sponsorship",
    description:
      "Businesses can help expand educational resources, awareness campaigns, and community initiatives through sponsorship opportunities.",
  },
  {
    title: "Community Ambassador",
    description:
      "Represent Layers of Hope within your local community by helping spread awareness and connecting patients with trusted resources.",
  },
  {
    title: "Share Your Skills",
    description:
      "Whether you're a designer, developer, photographer, writer, healthcare professional, or organizer, your expertise can make a difference.",
  },
];

export default function GetInvolvedPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              Get Involved
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Together, we can make a greater impact.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Whether you volunteer, partner with us, fundraise, or donate,
              every contribution helps strengthen support for individuals and
              families affected by mycosis fungoides and cutaneous T-cell
              lymphoma.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                Become Involved
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {waysToHelp.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold tracking-widest text-teal-700">
                {item.number}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-950">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Every Contribution Matters
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              There are many ways to support our mission.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Layers of Hope is more than a nonprofit. It is a growing movement
              dedicated to education, awareness, research, advocacy, and
              community support.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you have an hour to volunteer or want to become a long-term
              partner, your support helps move our mission forward.
            </p>
          </div>

          <div className="space-y-5">
            {opportunities.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
            Join Our Mission
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Help us create hope for patients and families everywhere.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100">
            As Layers of Hope continues to grow, we invite individuals,
            organizations, healthcare professionals, and supporters to become a
            part of our journey.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-teal-50 to-cyan-50 px-8 py-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Start Today
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
            Small actions create lasting change.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you volunteer your time, share our mission, donate, or
            simply tell someone about Layers of Hope, you're helping build a
            stronger future for those affected by this disease.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Get Started
            </Link>

            <Link
              href="/donate"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}