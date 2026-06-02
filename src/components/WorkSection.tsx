import { portfolio } from "@/data/portfolio";
import ExperienceCard from "@/components/ExperienceCard";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/50">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl text-black md:text-5xl">
            Experience & Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {portfolio.work.map((item, index) => (
            <ExperienceCard
              key={item.id}
              organization={item.organization}
              role={item.role}
              period={item.period}
              description={item.description}
              image={item.image}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
