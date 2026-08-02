import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-100 blur-3xl opacity-30" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">

        {/* Logo */}
        <Image
          src="/logo-icon.png"
          alt="Layers of Hope Foundation"
          width={170}
          height={170}
          priority
          className="mb-10"
        />

        {/* Heading */}
        <h1 className="max-w-5xl text-6xl font-bold tracking-tight text-slate-900 md:text-7xl">
          More Than a Diagnosis.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Supporting individuals and families affected by{" "}
          <span className="font-semibold text-teal-700">
            Mycosis Fungoides
          </span>{" "}
          and{" "}
          <span className="font-semibold text-teal-700">
            Cutaneous T-Cell Lymphoma (CTCL)
          </span>{" "}
          through education, support, advocacy, innovation, and hope.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-teal-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-teal-800">
            I Was Just Diagnosed
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition hover:scale-105 hover:border-teal-700 hover:text-teal-700">
            Learn About MF
          </button>

        </div>

        {/* Small Trust Text */}
        <p className="mt-10 text-sm text-slate-500">
          Education • Community • Research • Hope
        </p>

      </div>
    </section>
  );
}