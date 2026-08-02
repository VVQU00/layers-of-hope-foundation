import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  BookOpen,
  FileText,
  HeartHandshake,
  Microscope,
  Stethoscope,
  Users,
} from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Understanding Mycosis Fungoides",
      description:
        "Learn the basics of MF, CTCL, symptoms, diagnosis, and common terminology.",
      icon: BookOpen,
      href: "/resources/understanding-mf",
      available: true,
    },
    {
      title: "Treatment Information",
      description:
        "Explore common treatment approaches and questions to discuss with your healthcare team.",
      icon: Stethoscope,
      href: "#",
      available: false,
    },
    {
      title: "Support Resources",
      description:
        "Find organizations, patient support programs, and community resources.",
      icon: HeartHandshake,
      href: "#",
      available: false,
    },
    {
      title: "Clinical Research",
      description:
        "Learn about research, clinical trials, and future treatment developments.",
      icon: Microscope,
      href: "#",
      available: false,
    },
    {
      title: "Caregiver Resources",
      description:
        "Helpful information for family members and caregivers supporting a loved one.",
      icon: Users,
      href: "#",
      available: false,
    },
    {
      title: "Downloadable Guides",
      description:
        "Printable PDFs, appointment checklists, and educational handouts.",
      icon: FileText,
      href: "#",
      available: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-b from-teal-50 via-white to-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-700">
            Education Library
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            Trusted Resources.
            <br />
            Built Around Patients.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Our goal is to make reliable information easier to understand,
            easier to find, and easier to use.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <Link
                key={resource.title}
                href={resource.href}
                aria-disabled={!resource.available}
                className={`group rounded-3xl border bg-white p-8 shadow-sm transition ${
                  resource.available
                    ? "border-slate-200 hover:-translate-y-2 hover:border-teal-700 hover:shadow-xl"
                    : "cursor-default border-slate-200 opacity-75"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-2xl font-bold">{resource.title}</h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <p className="mt-8 font-semibold text-teal-700">
                  {resource.available ? "Read Guide →" : "Coming Soon"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}