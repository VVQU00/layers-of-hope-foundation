import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Hero */}

      <section className="bg-gradient-to-b from-teal-50 to-white py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <Image
            src="/logo-icon.png"
            alt="Layers of Hope Foundation"
            width={110}
            height={110}
            className="mx-auto"
          />

          <h1 className="mt-10 text-5xl font-bold">
            About Layers of Hope Foundation
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            We believe every individual affected by Mycosis Fungoides and
            Cutaneous T-Cell Lymphoma deserves access to trusted information,
            compassionate support, and hope for the future.
          </p>

        </div>

      </section>

      {/* Our Story */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[0.3em] text-teal-700">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why We Exist
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              Receiving a diagnosis of Mycosis Fungoides or Cutaneous T-Cell
              Lymphoma can leave individuals and families searching for
              answers, guidance, and support.

              Layers of Hope Foundation was created to make that journey
              less overwhelming by providing reliable education,
              meaningful community, and resources designed specifically
              for people living with these rare diseases.
            </p>

          </div>

          <div className="rounded-3xl bg-teal-50 p-10">

            <h3 className="text-2xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-700">
              To improve the lives of individuals and families affected by
              Mycosis Fungoides and Cutaneous T-Cell Lymphoma through
              education, patient support, advocacy, innovation,
              and research.
            </p>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-teal-700">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Everything We Do Starts Here
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-5xl">❤️</div>
              <h3 className="mt-5 text-2xl font-bold">Compassion</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-5xl">📚</div>
              <h3 className="mt-5 text-2xl font-bold">Education</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-5xl">🤝</div>
              <h3 className="mt-5 text-2xl font-bold">Community</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-5xl">💙</div>
              <h3 className="mt-5 text-2xl font-bold">Hope</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Founder Letter */}

      <section className="py-24">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white px-8 py-16 shadow-lg">

          <p className="font-semibold uppercase tracking-[0.3em] text-teal-700">
            Founder's Letter
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            More Than a Diagnosis.
          </h2>

          <p className="mt-10 leading-9 text-slate-600">

            When someone hears the words
            "You have Mycosis Fungoides,"
            life can change instantly.

            Questions appear faster than answers.

            Fear often replaces certainty.

            Layers of Hope Foundation was created
            to help change that.

            Our goal is simple:
            provide trustworthy education,
            build a supportive community,
            encourage research,
            and remind every individual and family
            that they are never alone.

          </p>

        </div>

      </section>

    </main>
  );
}