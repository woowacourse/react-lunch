export const getRestaurantData = async () => {
  const response = await fetch("mockData.json");
  const data = await response.json();
  return data;
};
