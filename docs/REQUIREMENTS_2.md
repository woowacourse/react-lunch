# 스탭 2 기능 목록

## Class Component를 Function Component로 마이그레이션 한다.

- [x] Header
- [x] App
- [x] Button
- [x] CategoryImage
- [x] Modal
- [x] RestaurantDetail
- [x] RestaurantList
- [x] RestaurantSummary
- [x] Select

## Custom Hooks을 이용하여 재사용 가능한 기능을 분리한다.

- [x] useLocalStorage hook 구현 (로컬스토리지 값 초기 설정, 불러오기, 저장 기능을 하는 훅)

- [x] useSafeUnionTypeState hook 구현 (커스텀 타입 가드가 적용된 useState 훅)

- [x] useModalState hook 구현 (모달창을 열고 닫을 때 스크롤 방지하는 기능이 적용된 useState 훅)

## 리팩터링 목록

- [x] 상수 파일에서 이용하는 값 네이밍 구체적으로 적기

- [x] App에서 메서드를 사용할 때 인자로 이벤트를 이용하는 것이 아닌 간단한 인자로 받도록 수정

- [x] types/restaurantinfo.ts 파일에서 올바른 값이 들어오는 지 확인하는 메서드를 타입 단언을 사용하지 않도록 수정
