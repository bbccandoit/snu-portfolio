import { portfolio } from "@/data/portfolio";
import CareerTimeline from "@/components/CareerTimeline";

export default function CareerPageContent() {
  return (
    <div className="min-h-screen bg-[#f4f5f8]">
      <div className="hero-section relative px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-36">
        <div className="hero-overlay pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Career
          </p>
          <h1 className="hero-title text-3xl font-bold md:text-4xl">이력</h1>
          <p className="mt-3 text-sm text-white/90 md:text-base">
            {portfolio.name} — 서울대학교 연구원 · 조교 · 강사
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[portfolio.contact.email, portfolio.contact.phone].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-20 md:px-6 md:pb-28">
        <CareerTimeline showBackLink />
      </div>
    </div>
  );
}
