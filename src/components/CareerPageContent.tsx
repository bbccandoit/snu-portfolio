import Image from "next/image";
import Link from "next/link";
import { getCareerSections, portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function CareerPageContent() {
  const sections = getCareerSections();

  return (
    <div className="min-h-screen bg-[#f4f5f8]">
      <div className="hero-section relative px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-36">
        <div className="hero-overlay pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Career
          </p>
          <h1 className="hero-title text-3xl font-bold md:text-4xl">
            {portfolio.name}
          </h1>
          <p className="mt-2 text-sm text-white/90 md:text-base">
            {portfolio.title}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[portfolio.contact.email, portfolio.contact.phone, portfolio.contact.location].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="px-4 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-4xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <SectionHeading label={section.titleEn} title={section.title} />

              <div className="space-y-5">
                {section.items.map((item) => (
                  <article
                    key={item.id}
                    className="card-shadow card-hover overflow-hidden rounded-2xl bg-white"
                  >
                    <div className="grid md:grid-cols-[180px_1fr]">
                      <div className="relative aspect-[4/3] bg-neutral-100 md:aspect-auto md:min-h-[180px]">
                        <Image
                          src={item.image}
                          alt={`${item.organization} - ${item.role}`}
                          fill
                          className="object-cover"
                          sizes="180px"
                        />
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#0f1117]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-indigo-500">
                          {item.organization}
                        </p>
                        <p className="mt-3 break-keep text-sm leading-relaxed text-[#6b7280]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section>
            <SectionHeading label="Education" title="학력" />
            <article className="card-shadow rounded-2xl bg-white p-6 md:p-8">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                {portfolio.education.period}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0f1117]">
                {portfolio.education.degree}
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                {portfolio.education.school} · {portfolio.education.department}
              </p>
            </article>
          </section>

          <div className="pt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-medium text-[#374151] transition-colors hover:border-indigo-200 hover:text-indigo-600"
            >
              ← 포트폴리오 홈으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
