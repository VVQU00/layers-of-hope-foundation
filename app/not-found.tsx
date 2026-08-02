import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-slate-900">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
          Error 404
        </span>

        <p className="mt-8 text-7xl font-bold tracking-tight text-teal-700 sm:text-8xl">
          404
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          This page could not be found.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The page you are looking for may have been moved, removed, or does not
          exist. You can return home or continue exploring Layers of Hope.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-teal-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Return Home
          </Link>

          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
          >
            Explore Resources
          </Link>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          <Link
            href="/about"
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
          >
            <p className="font-bold text-slate-950">About Us</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn about our mission and vision.
            </p>
          </Link>

          <Link
            href="/community"
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
          >
            <p className="font-bold text-slate-950">Community</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Find support and connection.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-teal-300 hover:bg-teal-50"
          >
            <p className="font-bold text-slate-950">Contact Us</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Send Layers of Hope a message.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}