import { Restaurant } from "../types/restaurant";
import { LocalStorage } from "../utils/LocalStorage";
import mockData from "../data/mockData.json";

const LOCAL_STORAGE_KEY = "RESTAURANT_LIST";

export const getInitList = () => {
  const localStorageData: Restaurant[] = LocalStorage.getData(LOCAL_STORAGE_KEY);
  if (localStorageData) {
    return localStorageData;
  }

  const mockList: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));
  LocalStorage.setData(LOCAL_STORAGE_KEY, mockList);

  return mockList;
};
