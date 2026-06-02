import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

function SkillBar({ level, max = 5 }: { level: number; max?: number }) {
  const pct = (level / max) * 100;
  return (
    <div className="skill-bar">
      <div className="skill-bar-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section id="skills" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Expertise"
          title="전문 역량"
          description="HR 전략, 인재개발, 데이터 분석 분야의 핵심 역량입니다."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {portfolio.expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-medium text-[#374151] card-shadow"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-shadow rounded-2xl bg-white p-6 md:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Core Skills
            </p>
            <ul className="space-y-5">
              {portfolio.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#374151]">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold text-indigo-500">
                      {skill.level}/5
                    </span>
                  </div>
                  <SkillBar level={skill.level} />
                </li>
              ))}
            </ul>
          </div>

          <div className="card-shadow rounded-2xl bg-white p-6 md:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Languages
            </p>
            <ul className="space-y-5">
              {portfolio.languages.map((lang) => (
                <li key={lang.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#374151]">
                      {lang.name}
                    </span>
                    <span className="text-xs font-semibold text-indigo-500">
                      {lang.level}/5
                    </span>
                  </div>
                  <SkillBar level={lang.level} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
