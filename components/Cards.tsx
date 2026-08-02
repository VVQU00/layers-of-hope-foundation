import {
  BookOpen,
  Stethoscope,
  Users,
} from "lucide-react";

export default function Cards() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Start Here
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Resources Designed for You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you&apos;re newly diagnosed, supporting a loved one, or
            looking for reliable information, we&apos;re building resources to
            help every step of the way.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Stethoscope className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              I Was Just Diagnosed
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Start with a step-by-step guide designed to help you
              understand your diagnosis and what comes next.
            </p>

            <button className="mt-8 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800">
              Coming Soon
            </button>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <BookOpen className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Education Library
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Browse articles, FAQs, treatment information, and trusted
              educational resources written for patients and families.
            </p>

            <button className="mt-8 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800">
              Coming Soon
            </button>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Users className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Community Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Connect with others, discover support resources, and learn
              how we&apos;re building a stronger community together.
            </p>

            <button className="mt-8 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}