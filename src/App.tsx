import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, Restaurant, SortOption } from "./types/restaurant";

interface AppState {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
  isModalOpen: boolean;
  modalContents: Restaurant;
}

class App extends Component {
  state: AppState = {
    selectedCategory: "all",
    selectedSort: "name",
    isModalOpen: false,
    modalContents: {
      id: 0,
      name: "",
      category: "etc",
      distance: 5,
    },
  };

  setSelectedCategory(category: CategoryOption) {
    this.setState({ selectedCategory: category });
  }

  setSelectedSort(sort: SortOption) {
    this.setState({ selectedSort: sort });
  }

  setModalContents(restaurant: Restaurant) {
    this.setState({ modalContents: restaurant });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const ModalProps = {
      closeModal: this.closeModal.bind(this),
      restaurant: this.state.modalContents,
    };

    const filterProps = {
      setSelectedCategory: this.setSelectedCategory.bind(this),
      setSelectedSort: this.setSelectedSort.bind(this),
    };

    const restaurantListProps = {
      selectedCategory: this.state.selectedCategory,
      selectedSort: this.state.selectedSort,
      setModalContents: this.setModalContents.bind(this),
      openModal: this.openModal.bind(this),
    };

    return (
      <div className="App">
        {this.state.isModalOpen && <RestaurantDetailModal {...ModalProps} />}
        <Header />
        <Filter {...filterProps} />
        <RestaurantList {...restaurantListProps} />
      </div>
    );
  }
}

export default App;
