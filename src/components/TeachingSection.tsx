import { portfolio } from "@/data/portfolio";
import ExperienceCard from "@/components/ExperienceCard";

export default function TeachingSection() {
  return (
    <section id="teaching" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/50">
            Teaching
          </p>
          <h2 className="font-serif text-3xl text-black md:text-5xl">
            교육 활동
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          <div>
            <div className="mb-10 flex items-center gap-4 md:mb-14">
              <div className="h-px flex-1 bg-black/10" />
              <h3 className="shrink-0 font-serif text-xl text-black md:text-2xl">
                TA 이력
              </h3>
              <div className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
              {portfolio.taHistory.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  organization={item.organization}
                  role={item.role}
                  period={item.period}
                  description={item.description}
                  image={item.image}
                  category="Teaching Assistant"
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 flex items-center gap-4 md:mb-14">
              <div className="h-px flex-1 bg-black/10" />
              <h3 className="shrink-0 font-serif text-xl text-black md:text-2xl">
                강사 이력
              </h3>
              <div className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
              {portfolio.lecturerHistory.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  organization={item.organization}
                  role={item.role}
                  period={item.period}
                  description={item.description}
                  image={item.image}
                  category="Lecturer"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
