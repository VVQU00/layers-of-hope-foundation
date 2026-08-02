import Link from "next/link";

const impactAreas = [
  {
    number: "01",
    title: "Patient Education",
    description:
      "Help create clear, accessible resources for people learning about mycosis fungoides and cutaneous T-cell lymphoma.",
  },
  {
    number: "02",
    title: "Community Support",
    description:
      "Support future programs that connect patients, caregivers, families, and advocates with one another.",
  },
  {
    number: "03",
    title: "Awareness and Research",
    description:
      "Help expand public awareness and strengthen future efforts that support meaningful research.",
  },
];

const givingAmounts = ["25", "50", "100", "250"];

export default function DonatePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
              Donate
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Help us turn hope into meaningful action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Your support will help Layers of Hope build educational
              resources, strengthen community support, increase awareness, and
              advance its mission for people affected by mycosis fungoides and
              cutaneous T-cell lymphoma.
            </p>

            <a
              href="#donation-form"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
          {impactAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold tracking-widest text-teal-700">
                {area.number}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-950">
                {area.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="donation-form"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8"
      >
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Your Support Matters
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Every contribution helps us move forward.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Layers of Hope is in its early stages. Donations will help us
              develop the foundation, create trusted educational content, build
              community programs, and prepare for future advocacy and research
              initiatives.
            </p>

            <div className="mt-8 rounded-3xl border border-teal-200 bg-teal-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Donation processing
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Online payment processing will be connected before the official
                launch. This Version 1 section currently shows the planned
                donation experience.
              </p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <fieldset>
              <legend className="text-lg font-bold text-slate-950">
                Select a donation amount
              </legend>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {givingAmounts.map((amount) => (
                  <label
                    key={amount}
                    className="cursor-pointer rounded-2xl border border-slate-300 bg-white px-4 py-4 text-center text-lg font-bold text-slate-950 transition hover:border-teal-600 hover:bg-teal-50"
                  >
                    <input
                      type="radio"
                      name="donationAmount"
                      value={amount}
                      className="sr-only"
                    />
                    ${amount}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <label
                htmlFor="customAmount"
                className="text-sm font-semibold text-slate-800"
              >
                Custom amount
              </label>

              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  $
                </span>

                <input
                  id="customAmount"
                  name="customAmount"
                  type="number"
                  min="1"
                  step="1"
                  className="w-full rounded-2xl border border-slate-300 py-3 pl-9 pr-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-slate-800"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                  placeholder="First name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-slate-800"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-800"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
            >
              Continue to Payment
            </button>

            <p className="mt-5 text-center text-sm leading-6 text-slate-500">
              Payment processing is not active yet. Please do not enter real
              payment information.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-teal-950">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
            More Ways to Help
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Your time, voice, and support can all make a difference.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100">
            Become a volunteer, share our mission, explore a partnership, or
            help connect someone with the Layers of Hope community.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/get-involved"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-teal-950 transition hover:bg-teal-50"
            >
              Get Involved
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-teal-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}