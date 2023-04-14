# react-lunch

<h2 align=“middle”>🤤 Level2 - 다시, 점심 뭐 먹지 미션</h2>
<p align=“middle”>우아한테크코스 레벨2 다시, 점심 뭐 먹지 미션</p>

---

## [🤤 다시, 점심 뭐 먹지 페이지 링크](https://dladncks1217.github.io/react-lunch/)

https://user-images.githubusercontent.com/45068522/231673472-a4e06575-9db3-44b8-a45e-ce42e62d4eaf.mov

## 📍 학습 목표

- API 연동을 위한 테스트 환경 경험
- 실제 동작하는 API를 통한 비동기 통신
- UX 경험 개선을 위한 더 보기(페이징) 구현
- 역할과 책임에 따라 관심사 분리하기

## 🚀 1단계 - 영화 목록 불러오기

### 🙏 페어(페어프로그래밍)

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/dladncks1217" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/45068522?v=4" alt="슬링키(임우찬) 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/cruelladevil" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/87710730?v=4" alt="코난(윤정민) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/dladncks1217" target="_blank">
        슬링키(임우찬)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cruelladevil" target="_blank">
        코난(윤정민)
      </a>
    </td>
  </tr>
</table>

📝 필수 요구사항
Step1의 주요 목표는 점심 뭐 먹지의 최종 렌더링 화면을 구현이다.

- 레벨1을 참고하여 REQUIREMENTS.md에 요구 사항을 도출한다.
- Class Component를 사용한다.
- 초기 로딩시 이전 값이 Local Storage에 존재한다면 초기 값으로 적용한다.
- mockData.json의 데이터를 이용하여, 초기 데이터를 셋팅한다.
  - 최소 각 카테고리 별로 3개 이상의 음식점을 mockData에 등록한다.
- 카레 고리별로 정렬하거나 이름순, 거리순으로 정렬할 수 있게 렌더링 한다.

### ✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

**Readability**

TS를 이용한다

**Reusability**

반복 되는 컴포넌트는 분리하여 재사용한다.
