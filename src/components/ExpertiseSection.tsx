import { portfolio } from "@/data/portfolio";

function StarRating({ level }: { level: number }) {
  return (
    <span className="text-black/30" aria-label={`${level} out of 5`}>
      {"★".repeat(level)}
      {"☆".repeat(5 - level)}
    </span>
  );
}

export default function ExpertiseSection() {
  const midpoint = Math.ceil(portfolio.expertise.length / 2);
  const leftColumn = portfolio.expertise.slice(0, midpoint);
  const rightColumn = portfolio.expertise.slice(midpoint);

  return (
    <section className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-serif text-3xl text-black md:text-4xl">
            Expertise
          </h2>
        </div>

        <div className="grid gap-x-16 gap-y-3 md:grid-cols-2">
          <ul className="space-y-3">
            {leftColumn.map((item) => (
              <li
                key={item}
                className="border-b border-black/5 pb-3 text-sm text-black/70"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {rightColumn.map((item) => (
              <li
                key={item}
                className="border-b border-black/5 pb-3 text-sm text-black/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-black/40">
              Core Skills
            </p>
            <ul className="space-y-4">
              {portfolio.skills.map((skill) => (
                <li key={skill.name} className="flex flex-col gap-1">
                  <span className="text-sm text-black/70">{skill.name}</span>
                  <StarRating level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-black/40">
              Languages
            </p>
            <ul className="space-y-4">
              {portfolio.languages.map((lang) => (
                <li key={lang.name} className="flex flex-col gap-1">
                  <span className="text-sm text-black/70">{lang.name}</span>
                  <StarRating level={lang.level} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
