export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <span className="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
            Privacy Policy
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold">Introduction</h2>

            <p className="mt-4 leading-8 text-slate-600">
              Layers of Hope Foundation respects your privacy. This Privacy
              Policy explains what information we collect, how we use it, and
              the choices you have regarding your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Information We Collect</h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Information you voluntarily provide through contact forms</li>
              <li>Donation information (when online donations become available)</li>
              <li>Basic website analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">How We Use Information</h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-600">
              <li>Respond to inquiries.</li>
              <li>Improve our educational resources.</li>
              <li>Communicate updates about the Foundation.</li>
              <li>Process future donations.</li>
              <li>Improve website performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Sharing Information</h2>

            <p className="mt-4 leading-8 text-slate-600">
              We do not sell your personal information. Information may only be
              shared with trusted service providers that help operate the
              Foundation or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Data Security</h2>

            <p className="mt-4 leading-8 text-slate-600">
              We use reasonable safeguards to protect information submitted
              through this website. However, no online system can guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Your Choices</h2>

            <p className="mt-4 leading-8 text-slate-600">
              You may request updates or removal of your personal information by
              contacting us through our Contact page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Changes</h2>

            <p className="mt-4 leading-8 text-slate-600">
              This Privacy Policy may be updated periodically. Changes will be
              posted on this page with a revised effective date.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}