import { useState } from 'react';
import { Restaurant, Category, All, Criterion } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';
import LunchDataService from '../../domains/LunchDataService';

function RestaurantList() {
  const [isItemClicked, setIsItemClicked] = useState<boolean>(false);
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
    setIsItemClicked(true);
    setClickedData(LunchDataService.getRestaurant(targetId));
  };

  const handleSetCategory = (newCategory: Category | All) => {
    setIsItemClicked(false);
    setCategory(newCategory);
    setRestaurantsData(LunchDataService.getRestaurants(newCategory, criterion));
  };

  const handleSetCriterion = (newCriterion: Criterion) => {
    setIsItemClicked(false);
    setCriterion(newCriterion);
    setRestaurantsData(LunchDataService.getRestaurants(category, newCriterion));
  };

  return (
    <>
      <section className="restaurant-filter-container">
        <CategoryFilter setCategory={handleSetCategory} />
        <SortingFilter setCriterion={handleSetCriterion} />
      </section>
      <ul>
        {restaurantsData.map((restaurantData: Restaurant) => {
          return <RestaurantItem key={restaurantData.id} data={restaurantData} onClick={onClick} />;
        })}
      </ul>
      {isItemClicked && <DetailModal data={clickedData} isClicked={isItemClicked} />}
    </>
  );
}

export default RestaurantList;
