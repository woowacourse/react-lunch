import { AlignFilter, Restaurant } from "../types/restaurants";
import { alignBy } from "../utils/restaurants";
import { fetchQuery } from "./index";

export const fetchMockRestaurants = async (options?: {
  align: AlignFilter;
}) => {
  const data = await fetchQuery<Restaurant[]>("./mocks/mockData.json");

  if (options) return alignBy(options.align, data);

  return data;
};
