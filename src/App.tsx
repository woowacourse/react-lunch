import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, Restaurant, SortOption } from "./types/restaurant";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryOption>("all");
  const [currentSort, setCurrentSort] = useState<SortOption>("name");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState<Restaurant>({
    id: 0,
    name: "",
    category: "etc",
    distance: 5,
  });

  const handleChangeCategory = (category: CategoryOption) => {
    setCurrentCategory(category);
  };

  const handleChangeSort = (sort: SortOption) => {
    setCurrentSort(sort);
  };

  const handleClickRestaurantItem = (restaurant: Restaurant) => {
    setModalContents(restaurant);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header title="점심 뭐 먹지" />
      <Filter onChangeCategory={handleChangeCategory} onChangeSort={handleChangeSort} />
      <RestaurantList
        currentCategory={currentCategory}
        currentSort={currentSort}
        onClickRestaurantItem={handleClickRestaurantItem}
      />
      {isModalOpen && <RestaurantDetailModal restaurant={modalContents} closeModal={closeModal} />}
    </div>
  );
};

export default App;
