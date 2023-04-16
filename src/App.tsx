import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, SortOption } from "./types/restaurant";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>("all");
  const [selectedSort, setSelectedSort] = useState<SortOption>("name");

  return (
    <div className="App">
      <Header title="점심 뭐 먹지" />
      <Filter setSelectedCategory={setSelectedCategory} setSelectedSort={setSelectedSort} />
      <RestaurantList selectedCategory={selectedCategory} selectedSort={selectedSort} />
    </div>
  );
};

export default App;
