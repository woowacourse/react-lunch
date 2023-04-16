import { useState } from 'react';
import { Category, Criterion, Restaurant } from '../types';
import LunchDataService from '../domains/LunchDataService';

function useRestaurantList() {
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>(
    LunchDataService.getRestaurants('전체', '이름순'),
  );
  const [isItemClick, setIsItemClick] = useState<boolean>(false);
  const [clickedItem, setClickedItem] = useState<Restaurant>({
    id: 0,
    category: '한식',
    name: '',
    distance: 0,
    description: '',
    link: '',
  });
  const [category, setCategory] = useState<Category>('전체');
  const [criterion, setCriterion] = useState<Criterion>('이름순');

  const handleItemClick = (id: string) => {
    setIsItemClick(true);
    setClickedItem(LunchDataService.getRestaurant(id));
  };

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
    setRestaurantsData(LunchDataService.getRestaurants(newCategory, criterion));
  };

  const handleCriterionChange = (newCriterion: Criterion) => {
    setCriterion(newCriterion);
    setRestaurantsData(LunchDataService.getRestaurants(category, newCriterion));
  };

  const handleModalClose = () => {
    setIsItemClick(false);
  };

  return {
    restaurantsData,
    isItemClick,
    clickedItem,
    handleCategoryChange,
    handleCriterionChange,
    handleItemClick,
    handleModalClose,
  };
}

export default useRestaurantList;
