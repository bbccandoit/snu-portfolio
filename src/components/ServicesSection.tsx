import { portfolio } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        {portfolio.services.map((service, index) => (
          <div
            key={service.title}
            className={`py-12 text-center md:py-16 ${
              index !== portfolio.services.length - 1
                ? "border-b border-black/10"
                : ""
            }`}
          >
            <h3 className="font-serif text-3xl text-black md:text-4xl">
              {service.title}
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-black/60 md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
