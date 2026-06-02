import Image from "next/image";
import Link from "next/link";
import MultilineText from "@/components/MultilineText";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <div className="hero-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {portfolio.title}
            </div>
            <h1 className="hero-title text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {portfolio.name}
            </h1>
            <MultilineText
              lines={portfolio.taglineLines}
              className="mt-4 text-base text-white md:text-lg"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/career"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0b0d17] transition-transform hover:scale-[1.02]"
              >
                경력 보기
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-xl border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                연락하기
              </Link>
            </div>
          </div>

          <div className="hero-glass-card card-hover rounded-3xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-2 ring-white/30">
                <Image
                  src={portfolio.aboutImages.portrait}
                  alt={portfolio.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold text-white">{portfolio.name}</p>
                <p className="text-sm text-white/85">HR Strategy Consultant</p>
              </div>
            </div>
            <MultilineText
              lines={portfolio.profileLines}
              className="text-sm text-white/90 md:text-base"
            />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Skills", value: `${portfolio.skills.length}+` },
                { label: "Experience", value: "3+" },
                { label: "Languages", value: `${portfolio.languages.length}` },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-black/30 px-3 py-3 text-center"
                >
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/75">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
