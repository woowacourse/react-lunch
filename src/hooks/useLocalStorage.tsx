import mockData from "../assets/mockData.json";

const useLocalStorage = (key: string) => {
  const getItem = () => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : mockData;
  };

  return [getItem];
};

export default useLocalStorage;
