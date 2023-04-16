import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, Restaurant, SortOption } from "./types/restaurant";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>("all");
  const [selectedSort, setSelectedSort] = useState<SortOption>("name");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState<Restaurant>({
    id: 0,
    name: "",
    category: "etc",
    distance: 5,
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      {isModalOpen && <RestaurantDetailModal closeModal={closeModal} restaurant={modalContents} />}
      <Header title="점심 뭐 먹지" />
      <Filter setSelectedCategory={setSelectedCategory} setSelectedSort={setSelectedSort} />
      <RestaurantList
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        setModalContents={setModalContents}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
