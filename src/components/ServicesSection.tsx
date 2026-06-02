import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const gradients = [
  "from-indigo-500 to-violet-600",
  "from-violet-500 to-purple-600",
  "from-purple-500 to-pink-500",
];

export default function ServicesSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Services"
          title="전문 서비스"
          description="HR 전략 수립부터 인재개발, 데이터 분석까지 End-to-End로 지원합니다."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.services.map((service, index) => (
            <article
              key={service.title}
              className="card-hover card-shadow group relative overflow-hidden rounded-2xl bg-white p-6 md:p-8"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} text-lg font-bold text-white shadow-lg`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-[#0f1117]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
                {service.description}
              </p>
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${gradients[index]} opacity-[0.06] transition-opacity group-hover:opacity-10`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
