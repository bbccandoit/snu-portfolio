import { portfolio } from "@/data/portfolio";

export default function AffiliationsSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
          Affiliations
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {portfolio.affiliations.map((name) => (
            <div
              key={name}
              className="card-hover card-shadow flex h-20 items-center justify-center rounded-2xl bg-white px-4 text-center text-sm font-semibold text-[#374151]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
