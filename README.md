<h1 align="middle">🤤</h1>
<h2 align="middle">Level2 - 다시, 점심 뭐 먹지 미션</h2>
<p align="middle">우아한테크코스 레벨2 다시, 점심 뭐 먹지 미션</p>

---

## [🤤 다시, 점심 뭐 먹지 페이지 링크](https://hyeryongchoi.github.io/react-lunch/)

<img width="400px" alt="점심 뭐 먹지 페이지 실행 화면" src="https://user-images.githubusercontent.com/24777828/231659514-fd6fc35d-9286-4d65-83a1-a88a4b35d8d0.gif">

## 📍 학습 목표

- 레벨1에서 구현하고 사용해본 점심 메뉴 애플리케이션을 React로 구현
- React 공식 문서를 단순히 학습이 아닌 구현 목적을 가지고 활용하고 공식 문서를 활용한 본인만의 접근 방식 만들기
- JS로 구현해본 컴포넌트를 React 컴포넌트로 작성

## 🚀 1단계 - Class Component

### 🙏 페어(페어프로그래밍)

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/24777828?v=4" alt="첵스(최혜령) 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/regularPark" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/90092440?v=4" alt="레고(박정규) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        첵스(최혜령)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/regularPark" target="_blank">
        레고(박정규)
      </a>
    </td>
  </tr>
</table>

### 📝 필수 요구사항

Step1의 주요 목표는 점심 뭐 먹지의 최종 렌더링 화면을 구현이다.

- 레벨1을 참고하여 REQUIREMENTS.md에 요구 사항을 도출한다.
- Class Component를 사용한다.
- 초기 로딩시 이전 값이 Local Storage에 존재한다면 초기 값으로 적용한다.
- mockData.json의 데이터를 이용하여, 초기 데이터를 셋팅한다.
  - 최소 각 카테고리 별로 3개 이상의 음식점을 mockData에 등록한다.
- 카레 고리별로 정렬하거나 이름순, 거리순으로 정렬할 수 있게 렌더링 한다.

### ✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

#### **Readability**

TS를 이용한다

#### **Reusability**

반복 되는 컴포넌트는 분리하여 재사용한다.

### 🏗 프로그램 구조도

<img width="600px" alt="프로그램 구조도" src="https://user-images.githubusercontent.com/24777828/231660457-e849849f-cc44-4c1d-98d4-4097f031a46a.png">

### 🗂 디렉터리 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜DetailModal.css
 ┃ ┃ ┣ 📜DetailModal.tsx
 ┃ ┃ ┣ 📜Modal.css
 ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┣ 📂RestaurantItem
 ┃ ┃ ┣ 📜RestaurantItem.css
 ┃ ┃ ┗ 📜RestaurantItem.tsx
 ┃ ┣ 📂RestaurantList
 ┃ ┃ ┗ 📜RestaurantList.tsx
 ┃ ┗ 📂SelectBox
 ┃ ┃ ┣ 📜CategoryFilter.tsx
 ┃ ┃ ┣ 📜SelectBox.css
 ┃ ┃ ┣ 📜SelectBox.tsx
 ┃ ┃ ┗ 📜SortingFilter.tsx
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂domains
 ┃ ┗ 📜LunchDataService.ts
 ┣ 📂initialData
 ┃ ┗ 📜restaurants.json
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```
