import Image from "next/image";
import Link from "next/link";
import { getCareerSections, portfolio } from "@/data/portfolio";

export default function CareerPageContent() {
  const sections = getCareerSections();

  return (
    <div className="px-6 pb-20 pt-28 md:px-10 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 border-b border-black/10 pb-10 md:mb-16 md:pb-12">
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-black/45">
            Career
          </p>
          <h1 className="font-serif text-3xl text-black md:text-4xl">
            {portfolio.name}
          </h1>
          <p className="mt-2 text-sm text-black/60 md:text-base">
            {portfolio.title}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/50">
            <span>{portfolio.contact.email}</span>
            <span>{portfolio.contact.phone}</span>
            <span>{portfolio.contact.location}</span>
          </div>
        </div>

        <div className="space-y-14 md:space-y-20">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#003876]/20 pb-3">
                <h2 className="font-serif text-xl text-black md:text-2xl">
                  {section.title}
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                  {section.titleEn}
                </span>
              </div>

              <div className="space-y-10">
                {section.items.map((item) => (
                  <article
                    key={item.id}
                    className="grid gap-6 md:grid-cols-[140px_1fr_160px] md:gap-8"
                  >
                    <time className="text-xs font-medium uppercase tracking-wide text-[#003876] md:pt-1">
                      {item.period}
                    </time>

                    <div>
                      <h3 className="text-base font-medium text-black">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-black/55">
                        {item.organization}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-black/65">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200 md:aspect-square">
                      <Image
                        src={item.image}
                        alt={`${item.organization} - ${item.role}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section>
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#003876]/20 pb-3">
              <h2 className="font-serif text-xl text-black md:text-2xl">
                학력
              </h2>
              <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                Education
              </span>
            </div>

            <article className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-8">
              <time className="text-xs font-medium uppercase tracking-wide text-[#003876] md:pt-1">
                {portfolio.education.period}
              </time>
              <div>
                <h3 className="text-base font-medium text-black">
                  {portfolio.education.degree}
                </h3>
                <p className="mt-1 text-sm text-black/55">
                  {portfolio.education.school} ·{" "}
                  {portfolio.education.department}
                </p>
              </div>
            </article>
          </section>
        </div>

        <div className="mt-16 text-center md:mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-black"
          >
            ← 포트폴리오 홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
