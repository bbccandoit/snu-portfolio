# 방병철 포트폴리오

HR 전략 컨설턴트 방병철의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- [Next.js](https://nextjs.org/) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) 배포

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 빌드

```bash
npm run build
npm start
```

## Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소를 연결합니다.
2. Framework Preset: **Next.js** (자동 감지)
3. Deploy를 클릭합니다.

또는 Vercel CLI 사용:

```bash
npx vercel
```

## 프로젝트 구조

```
├── docs/                          # 원본 포트폴리오 마크다운
│   └── snu-Byungcheol-portfolio.md
├── src/
│   ├── app/                       # Next.js App Router
│   ├── components/                # UI 컴포넌트
│   └── data/portfolio.ts          # 포트폴리오 콘텐츠
└── public/                        # 정적 자산
```

## 콘텐츠 수정

포트폴리오 내용은 `src/data/portfolio.ts`에서 수정할 수 있습니다. 원본 마크다운은 `docs/snu-Byungcheol-portfolio.md`에 있습니다.
