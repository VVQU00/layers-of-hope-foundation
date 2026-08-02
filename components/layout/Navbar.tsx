"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo-icon.png"
            alt="Layers of Hope Foundation"
            width={42}
            height={42}
          />

          <Image
            src="/wordmark.png"
            alt="Layers of Hope Foundation"
            width={190}
            height={55}
          />

        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <Link href="/" className="hover:text-teal-700 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-teal-700 transition">
            About
          </Link>

          <Link href="/resources" className="hover:text-teal-700 transition">
            Resources
          </Link>

          <Link href="/research" className="hover:text-teal-700 transition">
            Research
          </Link>

          <Link href="/community" className="hover:text-teal-700 transition">
            Community
          </Link>

          <Link href="/contact" className="rounded-lg border border-teal-700 px-4 py-2 text-teal-700 hover:bg-teal-700 hover:text-white transition">
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}