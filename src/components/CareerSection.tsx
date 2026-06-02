import CareerTimeline from "@/components/CareerTimeline";
import SectionHeading from "@/components/SectionHeading";

export default function CareerSection() {
  return (
    <section id="career" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Career"
          title="이력"
          description="서울대학교에서의 연구·교육 활동 경력입니다."
        />
        <CareerTimeline />
      </div>
    </section>
  );
}
