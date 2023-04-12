import React from "react";
import RestaurantItem from "./RestaurantItem.tsx";
import { Restaurant } from "./type";

type StateType = {
  restaurantList: Omit<Restaurant,"link">[];
}

type RestaurantListProps = {
  filterOptions: any;
}

class RestaurantList extends React.Component<RestaurantListProps> {
  state: StateType;

  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
    };
  }

  // 화면에 떴을 때

  componentDidMount(): void {
    const defaultData = localStorage.getItem('restaurantList');
    if (defaultData) {
      this.setState({ restaurantList: JSON.parse(defaultData) });
      return;
    }

    fetch('./mockData.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('restaurantList', JSON.stringify(data));
        this.setState({ restaurantList: data });
      });
  }

  // 리렌더링 될 때
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}

  filterByCategory(category): Restaurant[] {
    if (category === ("전체"))
      return this.state.restaurantList;
    return this.state.restaurantList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  sortRestaurants(category, sorting) {
    return this.filterByCategory(category).sort(
      (firstElement, secondElement) => {
        if (sorting === "name") {
          return firstElement.title.localeCompare(secondElement.title);
        }
        if (sorting === 'distance') {
          return firstElement.distance - secondElement.distance;
        }
        return 0;
      }
    );
  }

  render() {
    return (
      <section className='restaurant-list-container'>
        <ul className='restaurant-list'>
          {this.sortRestaurants(
            this.props.filterOptions.category,
            this.props.filterOptions.sorting
          ).map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;