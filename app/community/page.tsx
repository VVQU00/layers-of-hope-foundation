import Link from "next/link";

const communityFeatures = [
  {
    number: "01",
    title: "Patient Stories",
    description:
      "Real experiences from people living with mycosis fungoides and cutaneous T-cell lymphoma, shared to help others feel seen, understood, and less alone.",
  },
  {
    number: "02",
    title: "Caregiver Support",
    description:
      "Resources and encouragement for the family members, friends, and caregivers supporting someone throughout diagnosis, treatment, and everyday life.",
  },
  {
    number: "03",
    title: "Community Events",
    description:
      "Virtual gatherings, educational conversations, awareness events, and future local meetups designed to bring our community together.",
  },
];

const communityValues = [
  {
    title: "Connection",
    description:
      "Creating a safe place where patients, caregivers, families, and supporters can connect with people who understand their experiences.",
  },
  {
    title: "Understanding",
    description:
      "Helping people feel heard without judgment while making space for every stage of the journey.",
  },
  {
    title: "Hope",
    description:
      "Sharing knowledge, encouragement, and real stories that remind our community that no one has to face this alone.",
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              Our Community
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              You do not have to navigate this journey alone.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Layers of Hope is building a supportive community for people
              affected by mycosis fungoides and cutaneous T-cell lymphoma,
              including patients, caregivers, families, and advocates.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?topic=community"
                className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                Join Our Community
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {communityFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold tracking-widest text-teal-700">
                {feature.number}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-950">
                {feature.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              A Place to Belong
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Building the support network our community deserves.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A rare diagnosis can leave patients and families feeling
              isolated, overwhelmed, or unsure where to turn. Our goal is to
              create meaningful opportunities for people to find information,
              share experiences, and support one another.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As Layers of Hope grows, this community will help shape our
              programs, events, educational resources, and advocacy efforts.
            </p>
          </div>

          <div className="grid gap-5">
            {communityValues.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-lg font-bold text-teal-800">
                    {value.title.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Share Your Voice
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your experience can help someone else feel less alone.
            </h2>

            <p className="mt-6 text-lg leading-8 text-teal-50/80">
              We plan to feature patient, caregiver, and family stories that
              educate, encourage, and strengthen the mycosis fungoides
              community. Every story will only be shared with permission.
            </p>

            <Link
              href="/contact?topic=story"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-950 transition hover:bg-teal-50"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-teal-50 to-cyan-50 px-6 py-14 text-center sm:px-12 lg:px-20">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Growing Together
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Help us create a stronger future for everyone affected by this
            disease.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Connect with Layers of Hope, receive future updates, and be among
            the first to learn about community programs and events.
          </p>

          <Link
            href="/contact?topic=community"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Get Connected
          </Link>
        </div>
      </section>
    </main>
  );
}