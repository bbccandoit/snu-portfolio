import { portfolio } from "@/data/portfolio";

export default function AffiliationsSection() {
  return (
    <section className="border-t border-black/5 px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-center text-xs uppercase tracking-[0.35em] text-black/40">
          Affiliations
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {portfolio.affiliations.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center text-center text-sm font-medium tracking-wide text-black/30 transition-colors hover:text-black/60"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
