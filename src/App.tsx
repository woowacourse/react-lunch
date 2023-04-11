import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <RestaurantList />
    </div>
  );
}

export default App;
