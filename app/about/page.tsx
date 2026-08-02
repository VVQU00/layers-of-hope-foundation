import {
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Compassion",
      description:
        "We approach every patient, caregiver, and family with empathy, dignity, and respect.",
      icon: HeartHandshake,
    },
    {
      title: "Education",
      description:
        "We make complex information easier to understand so people can feel more informed and prepared.",
      icon: BookOpen,
    },
    {
      title: "Community",
      description:
        "We believe no one should have to navigate Mycosis Fungoides or CTCL alone.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We use thoughtful technology to create practical tools and improve access to support.",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description:
        "We value accuracy, transparency, responsible guidance, and trusted medical collaboration.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            About Us
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
            Built to Make the Journey Less Overwhelming.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Layers of Hope Foundation supports individuals and families
            affected by Mycosis Fungoides and Cutaneous T-Cell Lymphoma
            through education, community, advocacy, innovation, and hope.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
              Why We Exist
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              No one should have to search for answers alone.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              A rare diagnosis can create confusion, fear, and uncertainty.
              People may struggle to find clear explanations, experienced
              specialists, practical resources, and a community that
              understands what they are facing.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Layers of Hope Foundation was created to help close those gaps
              by building a trusted, accessible, and technology-driven
              support platform for the Mycosis Fungoides and CTCL community.
            </p>
          </div>

          <div className="rounded-3xl border border-teal-100 bg-teal-50 p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Education. Support. Advocacy. Innovation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Our mission is to improve the lives of individuals and families
              affected by Mycosis Fungoides and Cutaneous T-Cell Lymphoma by
              providing trusted education, compassionate support, practical
              tools, advocacy, and pathways to research and expert care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            Our Vision
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold md:text-5xl">
            A future where every person affected by MF or CTCL has access to
            trusted information, meaningful support, and hope.
          </h2>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What guides everything we build.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{value.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-300">
            Looking Ahead
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            We are building more than a website.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Our long-term vision includes patient education, guided support
            journeys, downloadable tools, specialist resources, community
            programs, research access, and technology that makes information
            easier to find and use.
          </p>
        </div>
      </section>
    </main>
  );
}