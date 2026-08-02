export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Layers of Hope Foundation
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Dedicated to supporting individuals and families affected by
              Mycosis Fungoides and Cutaneous T-Cell Lymphoma through
              education, advocacy, community, and hope.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>
                <a href="#" className="hover:text-teal-700">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-teal-700">
                  Resources
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-teal-700">
                  Research
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-teal-700">
                  Community
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-teal-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900">
              Contact
            </h4>

            <p className="mt-5 text-slate-600">
              info@layersofhopefoundation.org
            </p>

            <p className="mt-2 text-slate-600">
              Website currently under development.
            </p>

            <button className="mt-8 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800">
              Get Involved
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Layers of Hope Foundation.
            All rights reserved.
          </p>

          <p className="mt-3 text-sm text-slate-400">
            More Than a Diagnosis.
          </p>

        </div>

      </div>
    </footer>
  );
}