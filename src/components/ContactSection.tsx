import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const contactItems = [
  {
    label: "Email",
    value: portfolio.contact.email,
    href: `mailto:${portfolio.contact.email}`,
    icon: "✉",
  },
  {
    label: "Phone",
    value: portfolio.contact.phone,
    href: `tel:${portfolio.contact.phone.replace(/\s/g, "")}`,
    icon: "📞",
  },
  {
    label: "Location",
    value: portfolio.contact.location,
    href: undefined,
    icon: "📍",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="연락하기"
          description="프로젝트 문의나 협업 제안을 환영합니다."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="card-hover card-shadow rounded-2xl bg-white p-6 md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                {item.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9ca3af]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block text-sm font-medium text-[#0f1117] transition-colors hover:text-indigo-600"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-sm font-medium text-[#0f1117]">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
