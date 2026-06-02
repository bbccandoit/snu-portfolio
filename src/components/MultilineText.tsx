type MultilineTextProps = {
  lines: readonly string[];
  className?: string;
  as?: "p" | "div" | "span";
};

export default function MultilineText({
  lines,
  className = "",
  as: Tag = "p",
}: MultilineTextProps) {
  return (
    <Tag className={`break-keep leading-relaxed ${className}`}>
      {lines.map((line, index) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}
