import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "방병철 | HR Strategy Consultant",
  description:
    "HR 전략, 인재개발, 조직 성장 분야의 HR 전략 컨설턴트 방병철의 포트폴리오입니다.",
  openGraph: {
    title: "방병철 | HR Strategy Consultant",
    description:
      "데이터 기반 HR 전략과 사람 중심 조직 혁신으로, 실행 가능한 인재·조직 성장을 설계합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f5f3ee] font-sans text-black antialiased">
        {children}
      </body>
    </html>
  );
}
