import { useState } from 'react';
import { Restaurant, Category, All, Criterion } from '../../types';
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
  const [category, setCategory] = useState<Category | All>('전체');
  const [criterion, setCriterion] = useState<Criterion>('이름순');

  const handleItemClick = (id: string) => {
    setIsItemClick(true);
    setClickedData(LunchDataService.getRestaurant(id));
  };

  const handleChangeCategory = (newCategory: Category | All) => {
    setIsItemClick(false);
    setCategory(newCategory);
    setRestaurantsData(LunchDataService.getRestaurants(newCategory, criterion));
  };

  const handleChangeCriterion = (newCriterion: Criterion) => {
    setIsItemClick(false);
    setCriterion(newCriterion);
    setRestaurantsData(LunchDataService.getRestaurants(category, newCriterion));
  };

  return (
    <>
      <section className="restaurant-filter-container">
        <CategoryFilter setCategory={handleChangeCategory} />
        <SortingFilter setCriterion={handleChangeCriterion} />
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
      {isItemClick && <DetailModal restaurant={clickedData} />}
    </>
  );
}

export default RestaurantList;
