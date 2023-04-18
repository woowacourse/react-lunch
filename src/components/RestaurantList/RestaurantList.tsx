import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';
import useRestaurantList from '../../hooks/useRestaurantList';

function RestaurantList() {
  const {
    restaurantsData,
    isItemClick,
    clickedItem,
    handleCategoryChange,
    handleCriterionChange,
    handleItemClick,
    handleModalClose,
  } = useRestaurantList();

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
      {isItemClick && <DetailModal restaurant={clickedItem} handleModalClose={handleModalClose} />}
    </>
  );
}

export default RestaurantList;
