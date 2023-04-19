import { RESTUARNT_LIST_LOCAL_STORAGE_KEY } from '../src/constants';
import {
  getSavedLocalStorageList,
  hasSavedLocalStorageList,
  saveLocalStorageList,
} from '../src/domain/initializeRestaurantList';
import MOCK_DATA from '../src/data/MockData.json';

describe('로컬스토리지에 저장된 값이 있는지 판단하는 함수 테스트', () => {
  test('로컬스토리지에 저장된 값이 없다면 false 반환', () => {
    expect(hasSavedLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY)).toBe(false);
  });

  test('로컬스토리지에 저장된 값이 있다면 true 반환', () => {
    // given
    const mockData = MOCK_DATA.restaurantList;

    // when
    saveLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY, mockData);

    // then
    expect(hasSavedLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY)).toBe(true);
  });
});

describe('로컬스토리지에 초기 음식점 목록을 가져오는 함수 테스트', () => {
  test('로컬스토리지에 있던 값을 불러오는 테스트', () => {
    // given
    const mockData = MOCK_DATA.restaurantList;
    saveLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY, mockData);

    // when
    const data = getSavedLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY);

    // then
    expect(data).toEqual(mockData);
  });
  test('로컬스토리지에 새로 저장', () => {
    // given
    const mockData = MOCK_DATA.restaurantList;

    // when
    saveLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY, mockData);
    const data = getSavedLocalStorageList(RESTUARNT_LIST_LOCAL_STORAGE_KEY);

    // then
    expect(data).toEqual(mockData);
  });
});
