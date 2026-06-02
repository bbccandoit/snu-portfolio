import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="ko" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f4f5f8] font-sans text-[#0f1117] antialiased">
        {children}
      </body>
    </html>
  );
}
