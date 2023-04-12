import React from "react";
import Header from "./Header.tsx";
import RestaurantList from "./RestaurantList.tsx";
import SelectContainer from "./SelectContainer.tsx";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterOptions:{
        category: "전체",
        sorting:"name"
      }
    }
  }



  render() {
    return (
      <div className='App'>
        <Header />
        <SelectContainer />
        <RestaurantList filterOptions={this.state.filterOptions} />
      </div>
    );
  }
}

export default App;
