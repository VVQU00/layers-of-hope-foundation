"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const navClass = (href: string) =>
    pathname === href
      ? "font-semibold text-teal-700"
      : "text-slate-700 transition hover:text-teal-700";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/wordmark-horizontal.png"
            alt="Layers of Hope Foundation"
            width={906}
            height={258}
            className="h-auto w-[230px] sm:w-[250px] lg:w-[270px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className={navClass("/")}>
            Home
          </Link>

          <Link href="/about" className={navClass("/about")}>
            About
          </Link>

          <Link href="/resources" className={navClass("/resources")}>
            Resources
          </Link>

          <Link href="/research" className={navClass("/research")}>
            Research
          </Link>

          <Link href="/community" className={navClass("/community")}>
            Community
          </Link>

          <Link href="/get-involved" className={navClass("/get-involved")}>
            Get Involved
          </Link>

          <Link
            href="/donate"
            className={`rounded-lg px-5 py-2 font-semibold transition ${
              pathname === "/donate"
                ? "bg-teal-800 text-white"
                : "bg-teal-700 text-white hover:bg-teal-800"
            }`}
          >
            Donate
          </Link>

          <Link
            href="/contact"
            className={`rounded-lg border px-5 py-2 font-semibold transition ${
              pathname === "/contact"
                ? "border-teal-700 bg-teal-700 text-white"
                : "border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-2xl">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`py-3 ${navClass("/")}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`py-3 ${navClass("/about")}`}
            >
              About
            </Link>

            <Link
              href="/resources"
              onClick={closeMenu}
              className={`py-3 ${navClass("/resources")}`}
            >
              Resources
            </Link>

            <Link
              href="/research"
              onClick={closeMenu}
              className={`py-3 ${navClass("/research")}`}
            >
              Research
            </Link>

            <Link
              href="/community"
              onClick={closeMenu}
              className={`py-3 ${navClass("/community")}`}
            >
              Community
            </Link>

            <Link
              href="/get-involved"
              onClick={closeMenu}
              className={`py-3 ${navClass("/get-involved")}`}
            >
              Get Involved
            </Link>

            <Link
              href="/donate"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-teal-700 px-4 py-3 text-center font-semibold text-white"
            >
              Donate
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 rounded-lg border border-teal-700 px-4 py-3 text-center font-semibold text-teal-700"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}