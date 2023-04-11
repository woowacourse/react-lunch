import { RestaurantInfo } from '../src/types/restaurantInfo';

const RESTAURANT_LIST: RestaurantInfo[] = [
  {
    title: '피양콩할마니',
    estimatedTime: 10,
    category: '한식',
  },
  {
    title: '친친',
    estimatedTime: 5,
    category: '중식',
  },
  {
    title: '잇쇼우',
    estimatedTime: 5,
    category: '일식',
  },
  {
    title: '이태리키친',
    estimatedTime: 20,
    category: '양식',
  },
  {
    title: '호아빈 삼성점',
    estimatedTime: 15,
    category: '아시안',
  },
  {
    title: '시골밥상',
    estimatedTime: 30,
    category: '한식',
  },
  {
    title: '원할머니보쌈 선릉점',
    estimatedTime: 10,
    category: '한식',
  },
  {
    title: '최고다 참치',
    estimatedTime: 30,
    category: '일식',
  },
  {
    title: '역전우동 선릉점',
    estimatedTime: 20,
    category: '일식',
  },
];

describe('음식점 카테고리 선택 및 이름순, 거리순 정렬하는 기능 테스트', () => {
  test.each([
    ['전체', RESTAURANT_LIST.length],
    ['한식', 3],
    ['일식', 3],
    ['중식', 1],
    ['양식', 1],
    ['아시안', 1],
    ['기타', 0],
  ])('%s 음식점 카테고리 선택 결과는 %s 개다.', (kind, expected) => {
    //given

    //when
    const result = filterFoodCategory(RESTAURANT_LIST, kind);

    //then
    expect(result.length).toBe(expected);
  });

  test('음식점 이름 순으로 정렬했을 때 올바른 결과가 나오는 지 테스트', () => {
    //given
    const expected = [
      '시골밥상',
      '역전우동 선릉점',
      '원할머니보쌈 선릉점',
      '이태리키친',
      '잇쇼우',
      '최고다 참치',
      '친친',
      '피양콩할마니',
      '호아빈 삼성점',
    ];

    //when
    const result = sortByTitle(RESTAURANT_LIST).map((restaurant: RestaurantInfo) => restaurant.title);

    //then
    expect(result).toEqual(expected);
  });

  test('음식점 거리 순으로 정렬했을 때 올바른 결과가 나오는 지 테스트', () => {
    //given
    const expected = [
      '잇쇼우',
      '친친',
      '원할머니보쌈 선릉점',
      '피양콩할마니',
      '호아빈 삼성점',
      '역전우동 선릉점',
      '이태리키친',
      '시골밥상',
      '최고다 참치',
    ];

    //when
    const result = sortByEstimatedTime(RESTAURANT_LIST).map((restaurant: RestaurantInfo) => restaurant.title);

    //then
    expect(result).toEqual(expected);
  });
});
