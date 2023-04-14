import React, { useState } from 'react';
import { Restaurant, Category, All, Criterion } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import RestaurantDataService from '../../domains/LunchDataService';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';

function RestaurantList() {
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
    RestaurantDataService.getRestaurants('전체', '이름순'),
  );

  const onClick = (event: React.MouseEvent) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) return;
    const id = target.closest('[id]')?.id;

    if (!id) return;
    setIsClicked(true);
    setClickedData(RestaurantDataService.getRestaurant(id));
  };

  const handleSetCategory = (newCategory: Category | All) => {
    setIsClicked(false);
    setCategory(newCategory);
    setRestaurantsData(RestaurantDataService.getRestaurants(newCategory, criterion));
  };

  const handleSetCriterion = (newCriterion: Criterion) => {
    setIsClicked(false);
    setCriterion(newCriterion);
    setRestaurantsData(RestaurantDataService.getRestaurants(category, newCriterion));
  };

  return (
    <>
      <section className="restaurant-filter-container">
        <CategoryFilter setCategory={handleSetCategory} />
        <SortingFilter setCriterion={handleSetCriterion} />
      </section>
      <ul onClick={onClick}>
        {restaurantsData.map((restaurantData: Restaurant) => {
          return <RestaurantItem key={restaurantData.id} data={restaurantData} />;
        })}
      </ul>
      {isClicked && <DetailModal data={clickedData} />}
    </>
  );
}

export default RestaurantList;
