import mockData from "./mockData.json";

const getMockData = () => {
  return JSON.parse(JSON.stringify(mockData.restaurants));
};

export default getMockData;
