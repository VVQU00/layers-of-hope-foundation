import {
  BookOpen,
  HeartHandshake,
  Users,
} from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Our Mission
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            You Don&apos;t Have to Navigate This Alone.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Layers of Hope Foundation exists to improve the lives of
            individuals and families affected by Mycosis Fungoides and
            Cutaneous T-Cell Lymphoma through education, patient support,
            advocacy, innovation, and research.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <BookOpen className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Understand
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Learn about Mycosis Fungoides and CTCL with clear,
              trustworthy information written for patients and families.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <Users className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Find Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Connect with resources, future community programs,
              and guidance that can help throughout your journey.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <HeartHandshake className="mb-6 h-14 w-14 text-teal-700" />

            <h3 className="text-2xl font-bold text-slate-900">
              Inspire Hope
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              We believe every person deserves compassionate support,
              access to reliable information, and hope for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}