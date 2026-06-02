import Image from "next/image";
import Link from "next/link";
import MultilineText from "@/components/MultilineText";
import { portfolio } from "@/data/portfolio";

type CareerTimelineProps = {
  showBackLink?: boolean;
};

export default function CareerTimeline({ showBackLink = false }: CareerTimelineProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <div
          className="absolute bottom-0 left-[19px] top-0 w-px bg-indigo-200 md:left-[23px]"
          aria-hidden
        />

        <ol className="space-y-8">
          {portfolio.careerHistory.map((item, index) => (
            <li key={item.id} className="relative pl-12 md:pl-14">
              <div
                className="absolute left-3 top-6 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow-md ring-4 ring-indigo-100 md:left-4"
                aria-hidden
              />

              <article className="card-shadow card-hover overflow-hidden rounded-2xl bg-white">
                <div className="grid md:grid-cols-[160px_1fr]">
                  <div className="relative aspect-[16/10] bg-neutral-100 md:aspect-auto md:min-h-[160px]">
                    <Image
                      src={item.image}
                      alt={`${item.organization} ${item.role}`}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                        {item.role}
                      </span>
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        {item.period}
                      </span>
                      {item.period.includes("현재") && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                          재직 중
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#0f1117] md:text-lg">
                      {item.organization}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-indigo-400">
                      {item.roleEn}
                    </p>

                    <MultilineText
                      lines={item.descriptionLines}
                      className="mt-3 text-sm text-[#6b7280]"
                    />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <section className="mt-10">
        <article className="card-shadow rounded-2xl bg-white p-5 md:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
              학력
            </span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              {portfolio.education.period}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#0f1117] md:text-lg">
            {portfolio.education.degree}
          </h3>
          <p className="mt-1 text-sm text-[#6b7280]">
            {portfolio.education.school} · {portfolio.education.department}
          </p>
        </article>
      </section>

      {showBackLink && (
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-medium text-[#374151] transition-colors hover:border-indigo-200 hover:text-indigo-600"
          >
            ← 포트폴리오 홈으로
          </Link>
        </div>
      )}
    </div>
  );
}
