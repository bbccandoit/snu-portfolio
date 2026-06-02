const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-black text-white">
        <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#e63946]" />
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 md:py-28">
          <p className="font-serif text-3xl leading-snug md:text-5xl md:leading-tight">
            Ready to start a project?
            <br />
            Let&apos;s talk about your next big idea.
          </p>
          <a
            href="mailto:bbc.candoit@snu.ac.kr"
            className="mt-10 inline-block border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-black"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#f5f3ee] px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-black/40 md:flex-row">
          <p>© {new Date().getFullYear()} Byungcheol Bang. All rights reserved.</p>
          <a
            href="#"
            className="transition-colors hover:text-black"
          >
            Back to top
          </a>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="uppercase tracking-[0.15em] transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
