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

    this.onChangeFilterOptions = this.onChangeFilterOptions.bind(this);
  }

  onChangeFilterOptions(e) {
    console.log(e);

    this.setState({
      filterOptions: {
        ...this.state.filterOptions,        
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <SelectContainer onChangeFilterOptions={this.onChangeFilterOptions} filterOptions={this.state.filterOptions}/>
        <RestaurantList filterOptions={this.state.filterOptions} />
      </div>
    );
  }
}

export default App;
