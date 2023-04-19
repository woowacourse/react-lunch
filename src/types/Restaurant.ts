import type { Category, DistancesByMinutes } from '../constants/Restaurants';

type Restaurant = {
  id: number;
  name: string;
  category: Category;
  distanceByMinutes: DistancesByMinutes;
  description: string;
  link?: string;
};

export default Restaurant;
