import { useState } from 'react';
import { Restaurant, Category, Criterion } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import LunchDataService from '../../domains/LunchDataService';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';

function RestaurantList() {
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>(
    LunchDataService.getRestaurants('전체', '이름순'),
  );
  const [isItemClick, setIsItemClick] = useState<boolean>(false);
  const [clickedData, setClickedData] = useState<Restaurant>({
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
    setClickedData(LunchDataService.getRestaurant(id));
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

  return (
    <>
      <section className="restaurant-filter-container">
        <CategoryFilter setCategory={handleCategoryChange} />
        <SortingFilter setCriterion={handleCriterionChange} />
      </section>
      <ul>
        {restaurantsData.map((restaurantData: Restaurant) => {
          return (
            <RestaurantItem
              key={restaurantData.id}
              restaurant={restaurantData}
              handleClick={() => handleItemClick(String(restaurantData.id))}
            />
          );
        })}
      </ul>
      {isItemClick && <DetailModal restaurant={clickedData} handleModalClose={handleModalClose} />}
    </>
  );
}

export default RestaurantList;
