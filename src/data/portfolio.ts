export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  image: string;
};

export const portfolio = {
  name: "방병철",
  title: "HR STRATEGY CONSULTANT",
  tagline:
    "데이터 기반 HR 전략과 사람 중심 조직 혁신으로, 실행 가능한 인재·조직 성장을 설계합니다.",
  contact: {
    phone: "+82 10-7697-7660",
    email: "bbc.candoit@snu.ac.kr",
    location: "Seoul, South Korea",
  },
  profile:
    "HR 전략, 인재개발, 조직 성장 분야를 중심으로 활동하는 HR 전략 컨설턴트입니다. 서울대학교 산업인력개발학과 기반의 전문성과 AI 기반 HR 전략 연구 경험을 바탕으로 인재육성, 조직개발, 교육기획, 정책자문 프로젝트를 수행하고 있습니다. 데이터 기반 의사결정과 사람 중심 조직 혁신의 균형을 지향하며, HR과 교육, 정책, 브랜딩을 연결하는 융합적 접근을 강점으로 합니다.",
  values: [
    "데이터 기반 HR 전략 수립",
    "사람 중심 조직 혁신",
    "HR · 교육 · 정책 융합 접근",
    "실행 가능한 인사·조직 전략 설계",
  ],
  services: [
    {
      title: "Strategy",
      description:
        "조직 목표와 인재 전략을 연결하는 HR 전략 프레임워크를 설계합니다. 데이터와 정성적 인사이트를 결합해 실행 가능한 로드맵을 제시합니다.",
    },
    {
      title: "Development",
      description:
        "인재육성과 학습 설계를 통해 조직 역량을 강화합니다. 교육과정 기획부터 운영, 성과 측정까지 End-to-End로 지원합니다.",
    },
    {
      title: "Analytics",
      description:
        "AI 기반 HR 분석과 워크포스 전략 연구를 수행합니다. 조직·인재 데이터에서 의사결정에 필요한 인사이트를 도출합니다.",
    },
  ],
  skills: [
    { name: "HR Strategy & Organizational Development", level: 5 },
    { name: "Talent Development & Learning Design", level: 5 },
    { name: "HR Analytics & AI-based Workforce Strategy", level: 4 },
  ],
  expertise: [
    "HR Strategy & Planning",
    "Organizational Development",
    "Talent Development",
    "Learning Design",
    "Education Program Planning",
    "HR Analytics",
    "AI-based Workforce Strategy",
    "Policy Advisory",
  ],
  work: [
    {
      id: "people-lab",
      organization: "서울대학교 People Lab",
      role: "Researcher",
      period: "2026/01 – 2026/03",
      category: "Research",
      description:
        "AI 기반 HR 전략 연구 프로젝트를 수행하며 조직 및 인재관리 분야의 데이터 기반 연구를 진행했습니다.",
      image: "/images/work/people-lab.jpg",
    },
  ],
  taHistory: [
    {
      id: "ta-advanced",
      organization: "서울대학교",
      role: "Teaching Assistant",
      period: "2026/01 – 현재",
      description:
        "첨단융합학부·최고위과정 TA로 활동하며 교육과정 개발과 운영을 담당했습니다.",
      image: "/images/work/ta-advanced.jpg",
    },
  ] satisfies ExperienceItem[],
  lecturerHistory: [
    {
      id: "lecturer",
      organization: "서울대학교",
      role: "Lecturer",
      period: "2026/03 – 현재",
      description:
        "진로교육과정 강사로 AI 기반 HR 전략 수립 과정 개발, 교육 콘텐츠 기획, 학습 운영을 수행합니다.",
      image: "/images/work/lecturer.jpg",
    },
  ] satisfies ExperienceItem[],
  aboutImages: {
    portrait: "/images/about/profile-1.jpg",
    collaboration: "/images/about/profile-2.jpg",
    campus: "/images/about/campus.jpg",
  },
  education: {
    degree: "Master's Degree",
    school: "서울대학교",
    department: "산업인력개발학과",
    period: "재학중 – 2028/08 예정",
  },
  languages: [
    { name: "Korean", level: 5 },
    { name: "English", level: 4 },
  ],
  affiliations: [
    "서울대학교",
    "People Lab",
    "산업인력개발학과",
    "첨단융합학부",
  ],
} as const;
