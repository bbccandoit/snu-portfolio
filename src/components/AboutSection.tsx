import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function AboutSection() {
  const { aboutImages } = portfolio;

  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="font-serif text-3xl text-black md:text-5xl">
            Who I am
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
            {portfolio.name} — HR 전략 컨설턴트
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                <Image
                  src={aboutImages.portrait}
                  alt="프로필"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative mt-12 aspect-square overflow-hidden bg-neutral-200">
                <Image
                  src={aboutImages.collaboration}
                  alt="협업"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden bg-neutral-200">
                <Image
                  src={aboutImages.campus}
                  alt="서울대학교 캠퍼스"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-4">
              {portfolio.values.map((value) => (
                <li
                  key={value}
                  className="border-b border-black/10 pb-4 text-sm text-black/70 last:border-0"
                >
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Education
              </p>
              <p className="mt-3 font-medium text-black">
                {portfolio.education.degree}
              </p>
              <p className="mt-1 text-sm text-black/60">
                {portfolio.education.school} · {portfolio.education.department}
              </p>
              <p className="mt-1 text-xs text-black/40">
                {portfolio.education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
