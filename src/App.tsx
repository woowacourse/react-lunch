import React from "react";
import Header from "./Header.tsx";
import RestaurantList from "./RestaurantList.tsx";

class App extends React.Component{
  render() {
    return <div className='App'>
      <Header/>
      <RestaurantList />
    </div>;
  }
}

export default App;
