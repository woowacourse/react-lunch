import type { Category } from '../constants/categories';
import type { DistancesByMinutes } from '../constants/distancesByMinutes';

type Restaurant = {
  name: string;
  category: Category;
  distanceByMinutes: DistancesByMinutes;
  description: string;
  link?: string;
};

export default Restaurant;
