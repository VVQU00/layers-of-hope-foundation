type OptionCardProps = {
  title: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-6 text-left transition-all duration-200

      ${
        selected
          ? "border-teal-700 bg-teal-50 shadow-lg"
          : "border-slate-200 bg-white hover:border-teal-400 hover:shadow-md"
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>
    </button>
  );
}