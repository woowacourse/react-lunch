import React from 'react';
import Header from './components/Header/Header';
import RestaurantDataService from './domains/RestaurantDataService';
import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  RestaurantDataService.setInitialRestaurants();
  RestaurantDataService.getRestaurants();
  return (
    <div className="App">
      <Header />
      <RestaurantList />
    </div>
  );
}

export default App;
