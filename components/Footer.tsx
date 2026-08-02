import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Research", href: "/research" },
];

const communityLinks = [
  { name: "Community", href: "/community" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold text-white">
                Layers of Hope
              </h2>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Layers of Hope Foundation is dedicated to supporting individuals
              and families affected by mycosis fungoides and cutaneous T-cell
              lymphoma through education, awareness, advocacy, research, and
              community.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-teal-500 hover:bg-slate-900"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-teal-500 hover:bg-slate-900"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-teal-500 hover:bg-slate-900"
              >
                IN
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-teal-500 hover:bg-slate-900"
              >
                YT
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-teal-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Get Connected
            </h3>

            <ul className="mt-6 space-y-4">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-teal-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Layers of Hope Foundation. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition hover:text-teal-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-teal-300"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}