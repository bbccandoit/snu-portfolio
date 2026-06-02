import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-36 md:px-10 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/50">
          {portfolio.title}
        </p>
        <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-black md:text-6xl lg:text-7xl">
          {portfolio.tagline}
        </h1>
      </div>

      <div className="mx-auto mt-16 max-w-4xl md:mt-24">
        <div className="rounded-sm bg-[#ebe7df] px-8 py-12 md:px-16 md:py-16">
          <p className="text-center font-serif text-xl leading-relaxed text-black/80 md:text-2xl md:leading-relaxed">
            {portfolio.profile}
          </p>
        </div>
      </div>
    </section>
  );
}
