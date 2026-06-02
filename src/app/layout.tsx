import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getTagline, portfolio } from "@/data/portfolio";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} | HR Strategy Consultant`,
  description: `HR 전략, 인재개발, 조직 성장 분야의 HR 전략 컨설턴트 ${portfolio.name}의 포트폴리오입니다.`,
  openGraph: {
    title: `${portfolio.name} | HR Strategy Consultant`,
    description: getTagline(),
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f4f5f8] font-sans text-[#0f1117] antialiased">
        {children}
      </body>
    </html>
  );
}
