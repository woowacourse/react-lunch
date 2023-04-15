import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';
import useRestaurantList from './useRestaurantList';

function RestaurantList() {
  const {
    isClicked,
    clickedData,
    restaurantsData,
    handleSetCategory,
    handleSetCriterion,
    onClick,
  } = useRestaurantList();

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
      {isClicked && <DetailModal data={clickedData} />}
    </>
  );
}

export default RestaurantList;
