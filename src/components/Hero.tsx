import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-[#003876]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-black/45">
            {portfolio.title}
          </p>
          <h1 className="font-serif text-2xl leading-snug tracking-tight text-black sm:text-3xl md:text-4xl md:leading-snug">
            {portfolio.name}
          </h1>
          <div className="mx-auto my-6 h-px w-12 bg-[#003876]/30" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-black/75 md:text-lg md:leading-relaxed">
            {portfolio.tagline}
          </p>
          <Link
            href="/career"
            className="mt-8 inline-block border border-[#003876]/30 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[#003876] transition-colors hover:bg-[#003876] hover:text-white"
          >
            경력 보기
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <div className="rounded-md border border-black/5 bg-[#ebe7df]/80 px-6 py-8 shadow-sm md:px-10 md:py-10">
            <p className="text-center text-sm leading-relaxed text-black/70 md:text-base md:leading-relaxed">
              {portfolio.profile}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
