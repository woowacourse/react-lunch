import RestaurantManager from '../domain/RestaurantManager';
import mockData from '../domain/mockData.json';

/* eslint-disable */

let restaurantMockData = [];
beforeEach(() => {
  restaurantMockData = [...mockData];
});

// 다음 테스트 코드는 mockData.json을 통해 진행 됩니다.
describe('음식점 리스트를 정렬하는 로직을 확인한다.', () => {
  test('이름 순으로 정렬하면 가장 처음 오는 아이템은 "가츠동(id:8)" 이다.', () => {
    const restaurantList = RestaurantManager.sortByName(restaurantMockData);

    expect(restaurantList.shift()?.id).toBe(8);
  });

  test('이름 순으로 정렬하면 가장 나중에 오는 아이템은 "황금성(id:5)" 이다.', () => {
    // when
    const restaurantList = RestaurantManager.sortByName(restaurantMockData);

    expect(restaurantList.pop()?.id).toBe(5);
  });

  test('거리 순으로 정렬하면 처음에 오는 아이템의 거리는 5이다.', () => {
    // when
    const restaurantList = RestaurantManager.sortByDistance(restaurantMockData);

    expect(restaurantList.shift()?.distance).toBe(5);
  });

  test('거리 순으로 정렬하면 가장 나중에 오는 아이템의 거리는 20이다.', () => {
    // when
    const restaurantList = RestaurantManager.sortByDistance(restaurantMockData);

    expect(restaurantList.pop()?.distance).toBe(20);
  });
});

describe('음식점 리스트를 음식점 종류에 따라 필터링하는 로직을 확인한다.', () => {
  test('전체로 필터링 시에 음식점 개수는 19개이다.', () => {
    const category = '전체';
    const restaurantList =
      RestaurantManager.filterByCategory(category)(restaurantMockData);

    expect(restaurantList.length).toBe(19);
  });

  test('한식으로 필터링 시에 음식점 개수는 3개이다.', () => {
    const category = '한식';
    const restaurantList =
      RestaurantManager.filterByCategory(category)(restaurantMockData);

    expect(restaurantList.length).toBe(3);
  });

  test('양식으로 필터링 시에 음식점 개수는 3개이다.', () => {
    const category = '양식';
    const restaurantList =
      RestaurantManager.filterByCategory(category)(restaurantMockData);
    expect(restaurantList.length).toBe(3);
  });
});

describe('옵션에 따라 정렬 및 필터(카테고리)하여 아이템 리스트를 반환한다.', () => {
  test('카테고리: 한식, 정렬: 이름순 으로 설정 시에 반환되는 아이템 리스트의 id는 0, 2, 1 순이다.', () => {
    const restaurtantList = RestaurantManager.getFiltered(
      [
        RestaurantManager.sortByName,
        RestaurantManager.filterByCategory('한식'),
      ],
      restaurantMockData
    );
    const idList = restaurtantList.map((restaurant) => restaurant.id);

    expect(idList).toEqual([0, 2, 1]);
  });
});
