"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

type JourneyAnswers = {
  diagnosedPerson: string;
  currentFeeling: string;
};

type Option = {
  label: string;
  value: string;
};

const diagnosedOptions: Option[] = [
  { label: "Me", value: "me" },
  { label: "My spouse or partner", value: "partner" },
  { label: "My parent", value: "parent" },
  { label: "My child", value: "child" },
  { label: "Another family member", value: "family" },
  { label: "A friend", value: "friend" },
];

const feelingOptions: Option[] = [
  { label: "Scared or overwhelmed", value: "scared" },
  { label: "Confused", value: "confused" },
  { label: "Looking for treatment information", value: "treatment" },
  { label: "Looking for support", value: "support" },
  { label: "Just researching", value: "researching" },
];

const TOTAL_STEPS = 6;

export default function DiagnosisJourney() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState<JourneyAnswers>({
    diagnosedPerson: "",
    currentFeeling: "",
  });

  const progress = (step / TOTAL_STEPS) * 100;

  function nextStep() {
    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restartJourney() {
    setAnswers({
      diagnosedPerson: "",
      currentFeeling: "",
    });

    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const canContinue =
    step === 1 ||
    step === 4 ||
    step === 5 ||
    step === 6 ||
    (step === 2 && answers.diagnosedPerson !== "") ||
    (step === 3 && answers.currentFeeling !== "");

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
        {/* Top navigation */}
        <div className="mb-8 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Return home
          </a>

          <p className="text-sm font-medium text-slate-500">
            Step {step} of {TOTAL_STEPS}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-teal-700 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Journey card */}
        <section className="min-h-[620px] rounded-[2rem] border border-white bg-white/95 p-7 shadow-xl shadow-slate-200/60 backdrop-blur md:p-14">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <HeartHandshake className="h-10 w-10" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-teal-700">
                Welcome
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                We’re Glad You Found Us.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                A diagnosis of Mycosis Fungoides or CTCL can bring a lot of
                questions at once. You do not have to understand everything
                today. We’ll take this one step at a time.
              </p>

              <div className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-6 text-left">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-teal-700" />

                  <p className="leading-7 text-slate-700">
                    This journey provides general educational information. It
                    does not replace advice, diagnosis, or treatment from a
                    qualified healthcare professional.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <SelectionStep
              icon={<Users className="h-9 w-9" />}
              eyebrow="Let’s Begin"
              title="Who was diagnosed?"
              description="Your answer will eventually help us personalize the resources shown throughout this journey."
              options={diagnosedOptions}
              selectedValue={answers.diagnosedPerson}
              onSelect={(value) =>
                setAnswers((current) => ({
                  ...current,
                  diagnosedPerson: value,
                }))
              }
            />
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <SelectionStep
              icon={<Sparkles className="h-9 w-9" />}
              eyebrow="Check In"
              title="What are you looking for today?"
              description="There is no wrong answer. Choose the option that feels closest to what you need right now."
              options={feelingOptions}
              selectedValue={answers.currentFeeling}
              onSelect={(value) =>
                setAnswers((current) => ({
                  ...current,
                  currentFeeling: value,
                }))
              }
            />
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <InformationStep
              icon={<BookOpen className="h-9 w-9" />}
              eyebrow="Understanding the Diagnosis"
              title="Start with clear, reliable information."
            >
              <p>
                Mycosis Fungoides is a form of cutaneous T-cell lymphoma,
                commonly shortened to CTCL. Because every person’s situation
                is different, your healthcare team is the right source for
                information about your specific diagnosis and care.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <InfoBox
                  title="You can take your time"
                  text="You do not need to learn every medical term or make every decision immediately."
                />

                <InfoBox
                  title="Write down questions"
                  text="Keeping notes can make appointments feel more manageable and help you remember what was discussed."
                />

                <InfoBox
                  title="Ask for clarification"
                  text="It is okay to ask your healthcare team to repeat or explain something in simpler language."
                />

                <InfoBox
                  title="Use trusted sources"
                  text="Be cautious with online claims that promise cures or tell you to ignore professional medical care."
                />
              </div>
            </InformationStep>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <InformationStep
              icon={<ClipboardList className="h-9 w-9" />}
              eyebrow="Prepare for Your Appointment"
              title="Questions you may want to write down."
            >
              <div className="space-y-4">
                <QuestionItem text="What exactly is my diagnosis?" />
                <QuestionItem text="Do I need additional testing?" />
                <QuestionItem text="What treatment options should we discuss?" />
                <QuestionItem text="What side effects or changes should I report?" />
                <QuestionItem text="How often should I return for follow-up care?" />
                <QuestionItem text="Should I see a specialist who regularly treats CTCL?" />
                <QuestionItem text="Where can I find reliable patient-support resources?" />
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <div className="flex gap-4">
                  <Stethoscope className="mt-1 h-6 w-6 shrink-0 text-teal-700" />

                  <p className="leading-7 text-slate-700">
                    These are general conversation starters, not a complete
                    medical checklist. Add questions that reflect your own
                    symptoms, concerns, and circumstances.
                  </p>
                </div>
              </div>
            </InformationStep>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-10 w-10" />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-teal-700">
                Your Next Step
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                You Don’t Have to Do Everything Today.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Save your questions, speak with your healthcare team, and come
                back whenever you are ready. Layers of Hope Foundation is
                building more education and support resources for this journey.
              </p>

              <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
                <NextAction
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Keep Learning"
                  text="Explore educational resources."
                />

                <NextAction
                  icon={<Users className="h-6 w-6" />}
                  title="Find Support"
                  text="Discover community resources."
                />

                <NextAction
                  icon={<HeartHandshake className="h-6 w-6" />}
                  title="Stay Connected"
                  text="Follow the foundation’s progress."
                />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="mt-12 flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
              >
                <ArrowLeft className="h-5 w-5" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canContinue}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                {step === 1 ? "Start Journey" : "Continue"}
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={restartJourney}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                Restart Journey
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

type SelectionStepProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

function SelectionStep({
  icon,
  eyebrow,
  title,
  description,
  options,
  selectedValue,
  onSelect,
}: SelectionStepProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
        {icon}
      </div>

      <p className="mt-7 text-sm font-bold uppercase tracking-[0.28em] text-teal-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {options.map((option) => {
          const selected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`flex min-h-20 items-center justify-between rounded-2xl border p-5 text-left font-semibold transition ${
                selected
                  ? "border-teal-700 bg-teal-50 text-teal-900 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50/50"
              }`}
            >
              <span>{option.label}</span>

              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  selected
                    ? "border-teal-700 bg-teal-700 text-white"
                    : "border-slate-300"
                }`}
              >
                {selected && <Check className="h-4 w-4" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type InformationStepProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function InformationStep({
  icon,
  eyebrow,
  title,
  children,
}: InformationStepProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
        {icon}
      </div>

      <p className="mt-7 text-sm font-bold uppercase tracking-[0.28em] text-teal-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      <div className="mt-7 text-lg leading-8 text-slate-600">{children}</div>
    </div>
  );
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function QuestionItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
        <Check className="h-4 w-4" />
      </div>

      <p className="font-medium leading-7 text-slate-700">{text}</p>
    </div>
  );
}

type NextActionProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function NextAction({ icon, title, text }: NextActionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left">
      <div className="text-teal-700">{icon}</div>
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}