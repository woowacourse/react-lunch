## 기능 요구사항

- [x] 음식점 목록을 확인할 수 있어야 한다.
  - [x] 카테고리 별로 필터링해서 확인할 수 있어야 한다.
  - [x] 이름순/거리순으로 정렬해서 확인할 수 있어야 한다.
- [x] 음식점의 상세 정보를 확인할 수 있어야 한다.
  - [x] 음식점 링크를 표시해야 한다.
  - [x] 닫기 버튼을 눌러 상세 정보 창을 닫을 수 있어야 한다.

## step2 요구사항

- [x] 기존의 Class Component를 Function Component로 바꾼다.
- [ ] 커스텀 훅을 사용해야 한다.

## step2 리뷰 관련 사항

- [ ] `styled.` prefix 제거
- [x] prettier 기본값 제거
- [x] 불필요한 eslint 관련 의존성 제거
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-hooks
- [ ] 새로운 Reset CSS 찾아 적용하기
- [x] 불필요한 상수 파일 분리 하나로 합치기
- [ ] 배포될 때 `data-cy` 제거하기
- [ ] `RestaurantFilterContainer`를 `SearchBar`로 이름 변경하기
- [x] 컴포넌트 폴더 없애 depth 낮추기
- [ ] `CategoryIcon` 컴포넌트 개선하기
  - 디자인을 구체적으로 결정하지 않기 (범용적으로 사용할 수 있게)
  - 도메인 의존성이 없는 방향으로 분리하기
- [ ] `close-button` 을 구체적으로 네이밍하기
- [ ] `BottomSheetActions` 를 `BottomSheetButtonGroup` 으로 이름 바꾸기
- [ ] `Button` variant 평가를 한 파일에서 하도록 수정하기
- [x] `DropdownFilter` 컴포넌트를 Stateless로 바꾸기
- [ ] `.eslintrc.json` 을 `.eslintrc` 로 수정
- [ ] 아무런 기능이 없는 버튼은 `disabled` 처리

## step2 기타 개선 사항

- [ ] styled-components 에서 제공하는 theme 기능 사용하기
  - https://styled-components.com/docs/tooling#styled-theming
- [x] `DropdownFilter` 를 `Dropdown` 으로 수정

## step2 UX 개선 사항

- [ ] 카테고리 아이콘에 마우스 올리면 카테고리 이름 표시하게 하기
- [ ] BottomSheet의 최대 width 설정하기
  - 데스크탑에서는 너무 길게 보임
- [ ] 레스토랑 링크 스타일 수정하기
  - hover 시 underline으로 표시되게 하기
  - 링크인 것을 구분할 수 있도록 색깔 다르게 해주기
- [ ] 레스토랑을 hover 했을 때 구분되도록 배경 색상 추가
- [ ] SearchBox 스타일 수정하기
  - 항상 상단에 보일 수 있도록 sticky 추가
  - SearchBox와 RestaurantList 사이에 간격 주기
- [ ] 필터 결과가 없을 때 없다고 출력하기
- [ ] BottomSheet가 열려있을 때 메인 스크롤이 동작하지 않도록 설정
- [ ] 링크 간략화 하기
  - 예: TripAdvisor, 카카오맵
