import Link from "next/link";

const navItems = [
  { label: "Career", href: "/#career" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="relative overflow-hidden bg-[#0b0d17] px-4 py-20 md:px-6 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-snug text-white md:text-4xl">
            프로젝트를 시작할 준비가
            <br />
            <span className="gradient-text">되셨나요?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/50 md:text-base">
            HR 전략, 인재개발, 조직 혁신에 관한 문의를 환영합니다.
          </p>
          <a
            href="mailto:bbc.candoit@snu.ac.kr"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#0b0d17] transition-transform hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#080a12] px-4 py-6 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Byungcheol Bang. All rights reserved.</p>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="#" className="transition-colors hover:text-white/80">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
