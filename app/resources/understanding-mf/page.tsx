import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

export default function UnderstandingMFPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-teal-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-teal-700">
            Education Library
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Understanding Mycosis Fungoides
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            A beginner-friendly guide designed to help patients and families
            better understand Mycosis Fungoides (MF) and Cutaneous T-Cell
            Lymphoma (CTCL).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-14">

          <div>
            <h2 className="text-3xl font-bold">
              What is Mycosis Fungoides?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Mycosis Fungoides (MF) is the most common type of Cutaneous
              T-Cell Lymphoma (CTCL). It is a cancer involving certain white
              blood cells called T-cells that primarily affects the skin.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Common Symptoms
            </h2>

            <ul className="mt-6 space-y-3 list-disc pl-6 text-lg leading-8 text-slate-700">
              <li>Persistent patches or plaques</li>
              <li>Itching</li>
              <li>Changes in skin color</li>
              <li>Slow progression over time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Important Note
            </h2>

            <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-200 p-8">
              <p className="text-lg leading-8 text-slate-700">
                Every person's experience is different. This guide is for
                educational purposes only and should not replace medical advice
                from your healthcare provider.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}