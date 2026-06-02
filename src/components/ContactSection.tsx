import { portfolio } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-black/40">
              Get in touch
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40">
                  Email
                </p>
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  className="mt-1 block text-sm text-black transition-opacity hover:opacity-60"
                >
                  {portfolio.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40">
                  Phone
                </p>
                <a
                  href={`tel:${portfolio.contact.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-sm text-black transition-opacity hover:opacity-60"
                >
                  {portfolio.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40">
                  Location
                </p>
                <p className="mt-1 text-sm text-black">
                  {portfolio.contact.location}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-black/40">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  className="text-sm text-black/70 transition-colors hover:text-black"
                >
                  Email
                </a>
              </li>
              <li>
                <span className="text-sm text-black/70">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
