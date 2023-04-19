# react-lunch

## 우아한테크코스 레벨2 점심 뭐 먹지 미션 [데모 페이지](https://suyoungj.github.io/react-lunch/)

### 01. 구현 기능 (1단계)

- 카테고리 필터링
- 정렬
- 레스토랑 모달창 열기
  - 레스토랑 아이템 클릭하는 경우
- 레스토랑 모달창 닫기

  - esc 키 누르는 경우
  - 뒷 배경 클릭하는 경우
  - 닫기 버튼을 누르는 경우

    <br>

### 02. 구현 기능 (2단계)

- class component를 function component로 수정

    <br>

### 03. 파일 구조

```
src
 ┣ components
 ┃ ┣ Header
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.css
 ┃ ┃
 ┃ ┣ MainLayout
 ┃ ┃ ┣ CategoryFilter
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┃
 ┃ ┃ ┣ RestaurantItem
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ style.css
 ┃ ┃ ┃
 ┃ ┃ ┣ Sorting
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┃
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.css
 ┃ ┃
 ┃ ┣ RestaurantDetailModal
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ style.css
 ┃ ┃
 ┃ ┗ common
 ┃   ┣ CategoryIcon
 ┃   ┃ ┣ AsianIcon.tsx
 ┃   ┃ ┣ ChineseIcon.tsx
 ┃   ┃ ┣ EtcIcon.tsx
 ┃   ┃ ┣ JapaneseIcon.tsx
 ┃   ┃ ┣ KoreanIcon.tsx
 ┃   ┃ ┣ WesternIcon.tsx
 ┃   ┃ ┗ index.tsx
 ┃   ┃
 ┃   ┣ Modal
 ┃   ┃ ┣ index.tsx
 ┃   ┃ ┗ style.css
 ┃   ┃
 ┃   ┗ Select
 ┃     ┗ index.tsx
 ┃
 ┣ css
 ┃ ┣ App.css
 ┃ ┣ index.css
 ┃ ┣ palette.css
 ┃ ┣ reset.css
 ┃ ┗ typo.css
 ┃
 ┣ domain
 ┃ ┣ mockData.ts
 ┃ ┣ restaurantService.ts
 ┃ ┗ type.ts
 ┃
 ┣ utils
 ┃ ┗ localStorage.ts
 ┃
 ┣ App.tsx
 ┣ CONSTANT.ts
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ setupTests.ts
```
