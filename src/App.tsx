import React, { ChangeEvent, Component } from 'react';
import Header from './components/Header';
import './styles/App.css';
import { FoodCategory, RestaurantInfo, SortMethod, isFoodCategory, isSortMethod } from './types/restaurantInfo';
import { getSavedRestaurantList, hasSavedRestaurantList, saveRestaurantList } from './domain/initializeRestaurantList';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import RestaurantDetail from './components/RestaurantDetail';
import { deleteTargetRestaurant, filterFoodCategory, sortRestaurants } from './domain/RestaurantSelector';

interface AppState {
  originalRestaurantList: RestaurantInfo[];
  clickedRestaurant: RestaurantInfo | null;
  selectedCategory: FoodCategory;
  selectedSortingMethod: SortMethod;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      originalRestaurantList: [],
      clickedRestaurant: null,
      selectedCategory: '전체',
      selectedSortingMethod: '이름순',
    };

    this.setClickedRestaurant = this.setClickedRestaurant.bind(this);
    this.resetClickedRestaurant = this.resetClickedRestaurant.bind(this);
    this.selectChangeCallback = this.selectChangeCallback.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
  }

  componentDidMount() {
    if (!hasSavedRestaurantList()) saveRestaurantList();

    const list = getSavedRestaurantList();

    this.setState(
      {
        originalRestaurantList: list,
      },
    );
  }

  setClickedRestaurant(restaurantInfo: RestaurantInfo) {
    this.setState({
      clickedRestaurant: restaurantInfo,
    });

    document.body.dataset.hideScroll = 'true';
  }

  setSelectedCategory(value: string) {
    if (!isFoodCategory(value)) return;

    this.setState(
      {
        selectedCategory: value,
      },
    );
  }

  setSelectedSortingMethod(value: string) {
    if (!isSortMethod(value)) return;

    this.setState(
      {
        selectedSortingMethod: value,
      },
    );
  }

  resetClickedRestaurant() {
    this.setState({
      clickedRestaurant: null,
    });

    document.body.dataset.hideScroll = 'false';
  }

  deleteRestaurant() {
    const { originalRestaurantList, clickedRestaurant } = this.state;

    if (!clickedRestaurant) return;

    const updatedList = deleteTargetRestaurant(originalRestaurantList, clickedRestaurant);

    this.setState(
      {
        originalRestaurantList: updatedList,
      },
    );

    saveRestaurantList(updatedList);
    this.resetClickedRestaurant();
  }

  filterRestaurantList() {
    const { selectedCategory, selectedSortingMethod, originalRestaurantList } = this.state;

    const filteredList = filterFoodCategory(originalRestaurantList, selectedCategory);
    const sortedList = sortRestaurants(filteredList, selectedSortingMethod);

    return sortedList;
  }

  selectChangeCallback(event: ChangeEvent<HTMLSelectElement>, kind: 'filter' | 'sort') {
    const { value } = event.currentTarget;

    if (kind === 'filter') {
      this.setSelectedCategory(value);
    }

    if (kind === 'sort') {
      this.setSelectedSortingMethod(value);
    }
  }

  render() {
    const { clickedRestaurant } = this.state;

    const list = this.filterRestaurantList();

    return (
      <div className="app">
        <Header onChange={this.selectChangeCallback} />
        <RestaurantList onClick={this.setClickedRestaurant} restaurantList={list} />
        {clickedRestaurant && (
          <Modal onClose={this.resetClickedRestaurant}>
            <RestaurantDetail
              onDeleteClick={this.deleteRestaurant}
              onCloseClick={this.resetClickedRestaurant}
              restaurantInfo={clickedRestaurant}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
