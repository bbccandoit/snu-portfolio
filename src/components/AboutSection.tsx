import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  const { aboutImages } = portfolio;

  return (
    <section id="about" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Who I am"
          description={`${portfolio.name} — HR 전략 컨설턴트`}
        />

        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="grid grid-cols-2 gap-4 lg:col-span-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200 card-shadow">
              <Image
                src={aboutImages.portrait}
                alt="프로필"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            <div className="relative mt-8 aspect-square overflow-hidden rounded-2xl bg-neutral-200 card-shadow">
              <Image
                src={aboutImages.collaboration}
                alt="협업"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
            </div>
            <div className="relative col-span-2 aspect-[21/9] overflow-hidden rounded-2xl bg-neutral-200 card-shadow">
              <Image
                src={aboutImages.campus}
                alt="서울대학교 캠퍼스"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card-shadow rounded-2xl bg-white p-6 md:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                Core Values
              </p>
              <ul className="space-y-3">
                {portfolio.values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-3 rounded-xl bg-[#f4f5f8] px-4 py-3 text-sm text-[#374151]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {value}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                  Education
                </p>
                <p className="mt-2 font-semibold text-[#0f1117]">
                  {portfolio.education.degree}
                </p>
                <p className="mt-1 text-sm text-[#6b7280]">
                  {portfolio.education.school} · {portfolio.education.department}
                </p>
                <p className="mt-1 text-xs text-[#9ca3af]">
                  {portfolio.education.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
