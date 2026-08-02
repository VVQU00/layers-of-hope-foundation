import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/wordmark.png"
            alt="Layers of Hope Foundation"
            width={260}
            height={60}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            About
          </Link>

          <Link
            href="/resources"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            Resources
          </Link>

          <Link
            href="/research"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            Research
          </Link>

          <Link
            href="/community"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            Community
          </Link>

          <Link
            href="/donate"
            className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
          >
            Donate
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-teal-700 px-5 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-700 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}