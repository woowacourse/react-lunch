import React from 'react';
import { Restaurant, RestaurantListState, Category, All, Criterion } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import RestaurantDataService from '../../domains/LunchDataService';
import DetailModal from '../Modal/DetailModal';
import CategoryFilter from '../SelectBox/CategoryFilter';
import SortingFilter from '../SelectBox/SortingFilter';

class RestaurantList extends React.Component<{}, RestaurantListState> {
  constructor() {
    super({});
    this.setCategory = this.setCategory.bind(this);
    this.setCriterion = this.setCriterion.bind(this);
    this.state = {
      restaurantsData: RestaurantDataService.getRestaurants('전체', '이름순'),
      isClicked: false,
      clickedData: { id: 0, category: '한식', name: '', distance: 0, description: '', link: '' },
      category: '전체',
      criterion: '이름순',
    };
  }

  onClick = (event: React.MouseEvent) => {
    const target = event?.target;

    if (!(target instanceof HTMLElement)) return;
    const id = target.closest('[id]')?.id;

    if (!id) return;

    this.setState({ isClicked: true, clickedData: RestaurantDataService.getRestaurant(id) });
  };

  setCategory(newCategory: Category | All) {
    this.setState({
      isClicked: false,
      category: newCategory,
      restaurantsData: RestaurantDataService.getRestaurants(newCategory, this.state.criterion),
    });
  }

  setCriterion(newCriterion: Criterion) {
    this.setState({
      isClicked: false,
      criterion: newCriterion,
      restaurantsData: RestaurantDataService.getRestaurants(this.state.category, newCriterion),
    });
  }

  render() {
    const { isClicked, clickedData, restaurantsData } = this.state;

    return (
      <>
        <section className="restaurant-filter-container">
          <CategoryFilter setCategory={this.setCategory} />
          <SortingFilter setCriterion={this.setCriterion} />
        </section>
        <ul onClick={this.onClick}>
          {restaurantsData.map((restaurantData: Restaurant) => {
            return (
              <RestaurantItem
                key={restaurantData.id}
                id={restaurantData.id}
                category={restaurantData.category}
                name={restaurantData.name}
                distance={restaurantData.distance}
                description={restaurantData.description}
                link={restaurantData.link}
              />
            );
          })}
        </ul>
        {isClicked && <DetailModal data={clickedData} />}
      </>
    );
  }
}

export default RestaurantList;
