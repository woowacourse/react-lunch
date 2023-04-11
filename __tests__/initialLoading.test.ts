import fetch from 'node-fetch';
import { RestaurantInfo } from '../src/types/restaurantInfo';

const fetchJson = async (): Promise<RestaurantInfo[]> => {
  const data = await fetch('http://localhost:3000/data/MockData.json', { method: 'GET' })
    .then((res) => res.json())
    .then((data) => data.restaurantList);

  return data;
};

const KEY = 'restaurantList';

describe('로컬스토리지에 저장된 값이 있는지 판단하는 함수 테스트', () => {
  test('로컬스토리지에 저장된 값이 없다면 false 반환', () => {
    expect(hasSavedRestaurantList()).toBe(false);
  });

  test('로컬스토리지에 저장된 값이 있다면 true 반환', async () => {
    // given
    const mockData = await fetchJson();

    // when
    localStorage.setItem(KEY, mockData);

    // then
    expect(hasSavedRestaurantList()).toBe(true);
  });
});

describe('로컬스토리지에 초기 음식점 목록을 저장하는 함수 테스트', () => {
  test('로컬스토리지에 새로 저장', async () => {
    // given
    const mockData = await fetchJson();

    //when
    saveNewRestaurantList();
    const data = localStorage.getItem(KEY);

    // then
    expect(data).toEqual(mockData);
  });
});
