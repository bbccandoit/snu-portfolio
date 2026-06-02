import { portfolio } from "@/data/portfolio";

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
            <article
              key={item.id}
              className={`group ${index === 1 ? "md:mt-16" : ""}`}
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${item.accent}`}
              >
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-[0.25em] opacity-80">
                      {item.category}
                    </p>
                    <p className="mt-2 font-serif text-2xl">{item.organization}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-medium tracking-wide text-black">
                    {item.role}
                  </h3>
                  <span className="shrink-0 text-xs text-black/40">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
