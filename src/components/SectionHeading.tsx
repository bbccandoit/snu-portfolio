type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-indigo-300" : "text-indigo-500"
        }`}
      >
        {label}
      </p>
      <h2
        className={`text-2xl font-bold tracking-tight md:text-3xl ${
          light ? "text-white" : "text-[#0f1117]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-xl break-keep text-sm leading-relaxed md:text-base ${
            light ? "text-white/80" : "text-[#6b7280]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
