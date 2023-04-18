<h2 align="middle">🤔</h2>
<h1 align="middle">점심 뭐먹지?</h1>
<p align="middle">우아한테크코스 레벨2 점심 뭐 먹지 미션</p>

<br>

<p align="middle">
  <img src="https://user-images.githubusercontent.com/108778921/231674549-bb59cd3d-1097-438b-aa34-517f680cb37b.png" width="400px">
  <img src="https://user-images.githubusercontent.com/108778921/231673191-fdaa9e3f-8521-46a2-bb68-885dc1696576.png" width="400px">
</p>

<br>

### 📝 실행 방법

- <a href="https://feb-dain.github.io/react-lunch/">앱 바로 실행하기</a>

- 터미널에서 npm 설치(`npm install`) 후 `npm start` 커맨드로 앱을 실행할 수 있다.

<br>

## Step2

### ✅ 프로그래밍 요구 사항

> 이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

- Step1의 `Class Component`를 `Function Component`로 마이그레이션 한다.
- `Custom Hooks`을 이용하여 재사용 가능한 기능을 분리한다

<br>
<br>

## Step1

### 🧑‍🤝‍🧑 페어 (페어 프로그래밍으로 개발)

<table>
  <tr>
    <td align="center" width="120px">
      <a href="https://github.com/feb-dain" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/108778921?v=4" alt="야미(이다인) 프로필" />
      </a>
    </td>
    <td align="center" width="120px">
      <a href="https://github.com/hae-on" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/80464961?v=4" alt="해온(백솔비) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/feb-dain" target="_blank">
        야미(이다인)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hae-on" target="_blank">
        해온(백솔비) 
      </a>
    </td>
  </tr>
</table>

<br>

### 📍 학습 목표

- 레벨1에서 구현하고 사용해본 점심 메뉴 애플리케이션을 React로 구현
- React 공식 문서를 단순히 학습이 아닌 구현 목적을 가지고 활용하고 공식 문서를 활용한 본인만의 접근 방식 만들기
- JS로 구현해본 컴포넌트를 React 컴포넌트로 작성

<br>
<br>

### 🎯 기능 목록

레벨1을 참고하여 REQUIREMENTS.md에 요구 사항을 도출한다.

- Class Component를 사용한다.
- 초기 로딩시 이전 값이 Local Storage에 존재한다면 초기 값으로 적용한다.
- mockData.json의 데이터를 이용하여, 초기 데이터를 셋팅한다.
- 최소 각 카테고리 별로 3개 이상의 음식점을 mockData에 등록한다.
- 카테고리별로 정렬하거나 이름순, 거리순으로 정렬할 수 있게 렌더링 한다.

<br>
<br>

### ✅ 프로그래밍 요구 사항

가독성과 재사용성을 유의하며 기능을 구현한다.

- **Readability**
  <br>

- **Reusability**
  <br>

<br>

> 이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

- 예측 가능하고, 실수를 방지할 수 있는 코드를 작성하기 위해 노력한다.
  - 변수 선언시 const 만 사용한다.
  - 함수(또는 메서드)의 들여쓰기 depth는 1단계까지만 허용한다.
  - 함수의 매개변수는 2개 이하여야 한다.
  - 함수에서 부수 효과를 분리하고, 가능한 순수 함수를 많이 활용한다.

<br>

- 컴포넌트 단위로 구현하는 것을 고민하고 적용해본다.
  - 정적으로 렌더링할 영역과 동적으로 렌더링할 영역을 구분해서 고민한다.
  - 반복 되는 컴포넌트는 분리하여 재사용한다.

<br>

- 도메인 영역을 TypeScript를 사용해 구현한다. (UI 영역은 선택)
  - any를 사용하지 않는다.
  - interface 또는 type alias 를 이용하여, 주요 도메인 객체의 타입을 정의하고 설계한다.

<br>
<br>

---

<a href="https://github.com/woowacourse">@woowacourse</a>
