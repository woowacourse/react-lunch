import { Component, ReactNode } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import { Category, Restaurant, State } from './types';
import mockData from './data/mockRestaurantData.json';
import { RESTAURANT_CATEGORY } from './constants';

function validateCategory(category: string): Category {
  if (RESTAURANT_CATEGORY.includes(category as Category)) {
    return category as Category;
  }

  throw new Error(`유효하지 않는 카테고리: ${category}`);
}

const restaurantListData = mockData.restaurants.map<Restaurant>((restaurant) => ({
  ...restaurant,
  category: validateCategory(restaurant.category),
}));

class App extends Component {
  state: State;

  constructor(props: {}) {
    super(props);

    this.state = {
      restaurantList: restaurantListData, // mock data get data ?? mock data
      selectedRestaurant: 0,
      currentDisplayStatus: {
        category: '',
        sortBy: '',
      },
    };
  }

  render(): ReactNode {
    const { restaurantList } = this.state;

    return (
      <div className="App">
        {/* <Header></Header>
        <FilterSection></FilterSection> */}
        <RestaurantList restaurantList={restaurantList} />
      </div>
    );
  }
}

export default App;
