<h1 align="middle">🍴</h1>
<h2 align="middle">level2 - 점심 뭐 먹지?</h2>
<p align="middle">리액트로 구현하는 음식점 어플리케이션</p>

### 결과물: [점심 뭐 먹지](https://xodms0309.github.io/react-lunch/)

### 🚀 1단계 학습 목표
✔️ CRA를 사용하여 리액트 템플릿 생성 <br/>
✔️ Class Component로 구현하기 <br/>
✔️ Typescript 적용하기 <br/>
✔️ 반복 되는 컴포넌트는 분리하여 재사용하기 <br/>


### 📝 1단계 필수 요구사항
- 레스토랑 목록 렌더링
- 레스토랑 클릭시 모달 렌더링
- 카테고리 필터링
- 이름순/거리순 정렬
- LocalStorage에 데이터 저장

### 💻 페어프로그래밍
|<img src="https://avatars.githubusercontent.com/u/55427367?v=4" width=150px> |<img src="https://avatars.githubusercontent.com/u/77326660?v=4" width=150px>|
|:---:|:---:|
|[타미](http://github.com/xodms0309)|[센트](http://github.com/kyw0716)|


### 🧱 컴포넌트 구성
<img width="812" alt="스크린샷 2023-04-13 오후 2 46 21" src="https://user-images.githubusercontent.com/55427367/231664779-25bf38a8-aa8b-4840-925c-693335d9cd31.png">

### 🌲 파일 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜RestaurantDetail.tsx
 ┃ ┣ 📂restaurant
 ┃ ┃ ┣ 📜RestaurantItem.tsx
 ┃ ┃ ┗ 📜RestaurantList.tsx
 ┃ ┗ 📜SelectBox.tsx
 ┣ 📂layout
 ┃ ┣ 📜Header.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.ts
 ┣ 📂utils
 ┃ ┣ 📜storage.ts
 ┃ ┗ 📜util.ts
 ┣ 📜App.tsx
 ┣ 📜constants.ts
 ┣ 📜index.tsx
 ┣ 📜mockData.json
 ┗ 📜type.ts
```
