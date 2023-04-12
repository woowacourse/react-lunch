import { KEY } from '../src/constants';
import {
  fetchRestaurantListJson,
  hasSavedRestaurantList,
  saveNewRestaurantList,
} from '../src/domain/initializeRestaurantList';
import { RestaurantInfo } from '../src/types/restaurantInfo';

describe('로컬스토리지에 저장된 값이 있는지 판단하는 함수 테스트', () => {
  test('로컬스토리지에 저장된 값이 없다면 false 반환', () => {
    expect(hasSavedRestaurantList()).toBe(false);
  });

  test('로컬스토리지에 저장된 값이 있다면 true 반환', async () => {
    // given
    const mockData: RestaurantInfo[] = await fetchRestaurantListJson();

    // when
    localStorage.setItem(KEY, JSON.stringify(mockData));

    // then
    expect(hasSavedRestaurantList()).toBe(true);
  });
});

describe('로컬스토리지에 초기 음식점 목록을 저장하는 함수 테스트', () => {
  test('로컬스토리지에 새로 저장', async () => {
    // given
    const mockData = await fetchRestaurantListJson();

    // when
    saveNewRestaurantList();
    const data = JSON.parse(localStorage.getItem(KEY) || '[]');

    // then
    expect(data).toEqual(mockData);
  });
});
