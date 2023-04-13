import React, { ChangeEvent, Component } from 'react';
import Header from './components/Header';
import './styles/App.css';
import { FoodCategory, RestaurantInfo, SortMethod, isFoodCategory, isSortMethod } from './types/restaurantInfo';
import {
  getSavedRestaurantList,
  hasSavedRestaurantList,
  saveNewRestaurantList,
} from './domain/initializeRestaurantList';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import RestaurantDetail from './components/RestaurantDetail';
import { filterFoodCategory, sortRestaurants } from './domain/RestaurantSelector';

interface AppState {
  restaurantList: RestaurantInfo[];
  clickedRestaurant: RestaurantInfo | null;
  selectedCategory: FoodCategory;
  selectedSortingMethod: SortMethod;
}

class App extends Component<object, AppState> {
  originalRestaurantList: RestaurantInfo[];

  constructor(props: object) {
    super(props);

    this.originalRestaurantList = [];

    this.state = {
      restaurantList: [] as RestaurantInfo[],
      clickedRestaurant: null,
      selectedCategory: '전체',
      selectedSortingMethod: '이름순',
    };

    this.setClickedRestaurant = this.setClickedRestaurant.bind(this);
    this.resetClickedRestaurant = this.resetClickedRestaurant.bind(this);
    this.selectChangeCallback = this.selectChangeCallback.bind(this);
    this.filterRestaurantList = this.filterRestaurantList.bind(this);
  }

  async componentDidMount() {
    if (!hasSavedRestaurantList()) await saveNewRestaurantList();

    const list = getSavedRestaurantList();
    this.originalRestaurantList = list;

    this.setState({
      restaurantList: list,
    });
  }

  setClickedRestaurant(restaurantInfo: RestaurantInfo) {
    this.setState({
      clickedRestaurant: restaurantInfo,
    });

    document.body.dataset.hideScroll = 'true';
  }

  resetClickedRestaurant() {
    this.setState({
      clickedRestaurant: null,
    });

    document.body.dataset.hideScroll = 'false';
  }

  filterRestaurantList() {
    const { selectedCategory, selectedSortingMethod } = this.state;

    const filteredList = filterFoodCategory(this.originalRestaurantList, selectedCategory);
    const sortedList = sortRestaurants(filteredList, selectedSortingMethod);

    this.setState({
      restaurantList: sortedList,
    });
  }

  selectChangeCallback(event: ChangeEvent<HTMLSelectElement>, kind: 'filter' | 'sort') {
    const { value } = event.currentTarget;

    if (kind === 'filter') {
      if (!isFoodCategory(value)) return;

      this.setState(
        {
          selectedCategory: value,
        },
        this.filterRestaurantList,
      );
    }

    if (kind === 'sort') {
      if (!isSortMethod(value)) return;

      this.setState(
        {
          selectedSortingMethod: value,
        },
        this.filterRestaurantList,
      );
    }
  }

  render() {
    const { restaurantList, clickedRestaurant } = this.state;
    return (
      <div className="app">
        <Header onChange={this.selectChangeCallback} />
        <RestaurantList onClick={this.setClickedRestaurant} restaurantList={restaurantList} />
        {clickedRestaurant && (
          <Modal onClose={this.resetClickedRestaurant}>
            <RestaurantDetail onCloseClick={this.resetClickedRestaurant} restaurantInfo={clickedRestaurant} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
