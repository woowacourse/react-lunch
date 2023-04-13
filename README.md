# react-lunch

우아한테크코스 레벨2 점심 뭐 먹지 미션

## [🍱 데모 페이지](https://suyoungj.github.io/react-lunch/)

## 프로젝트 실행 방법

```
// 저장소 클론
git clone -b step1 --single-branch https://github.com/suyoungj/react-lunch.git

// 패키지 설치
npm i

// 애플리케이션 실행
npm start

// E2E 테스트 실행
npx cypress run
```

## 디렉터리 구조도

```
.
├── App.tsx
├── index.tsx
│
├── components
│   ├── Header
│   │   ├── index.tsx
│   │   └── style.css
│   │
│   ├── MainLayout
│   │   ├── index.tsx
│   │   ├── style.css
│   │   │
│   │   ├── CategoryFilter
│   │   │   └── index.tsx
│   │   │
│   │   ├── RestaurantItem
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   │
│   │   └── Sorting
│   │       └── index.tsx
│   │
│   ├── RestaurantDetailModal
│   │   ├── index.tsx
│   │   └── style.css
│   │
│   └── common
│       ├── CategoryIcon
│       │   ├── AsianIcon.tsx
│       │   ├── ChineseIcon.tsx
│       │   ├── EtcIcon.tsx
│       │   ├── JapaneseIcon.tsx
│       │   ├── KoreanIcon.tsx
│       │   ├── WesternIcon.tsx
│       │   └── index.tsx
│       │
│       ├── Modal
│       │   ├── index.tsx
│       │   └── style.css
│       │
│       └── Select
│           └── index.tsx
├── css
│   ├── App.css
│   ├── index.css
│   ├── palette.css
│   ├── reset.css
│   └── typo.css
│
├── domain
│   ├── restaurantService.ts
│   └── type.ts
│
└── utils
    └── localStorage.ts
```
