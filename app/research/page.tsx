import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Microscope,
  FlaskConical,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function ResearchPage() {
  const sections = [
    {
      title: "Understanding Clinical Trials",
      description:
        "Learn what clinical trials are, why they matter, and how they help improve patient care.",
      icon: Microscope,
    },
    {
      title: "Current Research",
      description:
        "Stay informed about emerging treatments and scientific discoveries related to MF and CTCL.",
      icon: FlaskConical,
    },
    {
      title: "Research Library",
      description:
        "Access educational articles and trusted scientific resources written for patients.",
      icon: BookOpen,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-teal-50 via-white to-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            Research
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            Advancing Hope Through Research.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Scientific research plays an important role in improving diagnosis,
            treatment options, and quality of life for people living with
            Mycosis Fungoides and Cutaneous T-Cell Lymphoma.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {section.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Research Gives Us Hope.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Every clinical study, scientific paper, and medical breakthrough
            brings us one step closer to improving the lives of people affected
            by MF and CTCL.
          </p>

          <Link
            href="/resources"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
          >
            Explore Resources
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}