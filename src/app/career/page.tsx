import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerPageContent from "@/components/CareerPageContent";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `경력 | ${portfolio.name}`,
  description: `${portfolio.name}의 연구, TA, 강사 경력 및 학력을 한눈에 확인할 수 있습니다.`,
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <CareerPageContent />
      </main>
      <Footer />
    </>
  );
}
