import Link from "next/link";
import {
  BookOpen,
  HeartHandshake,
  Microscope,
  Stethoscope,
} from "lucide-react";

export default function QuickActions() {
  const cards = [
    {
      title: "I Was Just Diagnosed",
      description:
        "Start with our guided journey designed to help you understand what comes next.",
      href: "/diagnosed",
      icon: <Stethoscope className="h-10 w-10 text-teal-700" />,
    },
    {
      title: "Education Library",
      description:
        "Learn about Mycosis Fungoides, CTCL, treatments, and common questions.",
      href: "/resources",
      icon: <BookOpen className="h-10 w-10 text-teal-700" />,
    },
    {
      title: "Find Support",
      description:
        "Discover organizations, support groups, and helpful community resources.",
      href: "/community",
      icon: <HeartHandshake className="h-10 w-10 text-teal-700" />,
    },
    {
      title: "Research",
      description:
        "Explore clinical research, studies, and future treatment developments.",
      href: "/research",
      icon: <Microscope className="h-10 w-10 text-teal-700" />,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Quick Actions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Where would you like to start?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Choose the area that best fits what you need today.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-700 hover:shadow-xl"
            >
              {card.icon}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.description}
              </p>

              <p className="mt-8 font-semibold text-teal-700 group-hover:underline">
                Open →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}