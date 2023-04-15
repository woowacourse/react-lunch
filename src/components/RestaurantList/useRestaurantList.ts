import { useState } from 'react';
import { Category, All, Criterion, Restaurant } from '../../types';
import LunchDataService from '../../domains/LunchDataService';

export default function useRestaurantList() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [clickedData, setClickedData] = useState<Restaurant>({
    id: 0,
    category: '한식',
    name: '',
    distance: 0,
    description: '',
    link: '',
  });
  const [category, setCategory] = useState<Category | All>('전체');
  const [criterion, setCriterion] = useState<Criterion>('이름순');
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>(
    LunchDataService.getRestaurants('전체', '이름순'),
  );

  const onClick = (targetId: string) => {
    if (!targetId) return;
    setIsClicked(true);
    setClickedData(LunchDataService.getRestaurant(targetId));
  };

  const handleSetCategory = (newCategory: Category | All) => {
    setIsClicked(false);
    setCategory(newCategory);
    setRestaurantsData(LunchDataService.getRestaurants(newCategory, criterion));
  };

  const handleSetCriterion = (newCriterion: Criterion) => {
    setIsClicked(false);
    setCriterion(newCriterion);
    setRestaurantsData(LunchDataService.getRestaurants(category, newCriterion));
  };

  return {
    isClicked,
    clickedData,
    restaurantsData,
    handleSetCategory,
    handleSetCriterion,
    onClick,
  };
}
