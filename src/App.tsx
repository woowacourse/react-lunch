import { Category, Restaurant } from "./types/restaurant";

import React from "react";
import "./App.css";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";

import mockData from "./mockData.json";

class App extends React.Component<
  any,
  {
    restaurants: Restaurant[];
    category: string;
    sortingType: string;
    isModalOpen: boolean;
    detailId: Restaurant["id"];
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      restaurants: mockData.restaurants as Restaurant[],
      category: "전체",
      sortingType: "이름순",
      isModalOpen: false,
      detailId: "1",
    };
  }

  openModal = (id: Restaurant["id"]) => {
    this.setState({
      ...this.state,
      detailId: id,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      isModalOpen: false,
    });
  };

  setCategory = (category: Category) => {
    this.setState({
      ...this.state,
      category,
    });
  };

  setSortingType = (sortingType: string) => {
    this.setState({
      ...this.state,
      sortingType,
    });
  };

  filterRestaurants = () => {
    const { category, sortingType } = this.state;

    const restaurants = this.state.restaurants.filter(
      (restaurant) => category === "전체" || restaurant.category === category
    );

    const getPivot = (restaurant: Restaurant) => {
      return sortingType === "name" ? restaurant.name : restaurant.distance;
    };

    return restaurants.sort((a, b) => {
      const A = getPivot(a);
      const B = getPivot(b);
      if (A > B) return 1;
      if (A < B) return -1;
      return 0;
    });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>

        <RestaurantList
          restaurants={this.filterRestaurants()}
          openModal={this.openModal}
          setCategory={this.setCategory}
          setSortingType={this.setSortingType}
        ></RestaurantList>

        {this.state.isModalOpen && (
          <RestaurantDetail
            closeModal={this.closeModal}
            restaurant={
              mockData.restaurants.find(
                (restaurant) => restaurant.id === this.state.detailId
              ) as Restaurant
            }
          ></RestaurantDetail>
        )}
      </div>
    );
  }
}

export default App;
