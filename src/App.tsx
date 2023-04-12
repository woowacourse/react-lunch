import React from "react";
import Header from "./Header.tsx";
import RestaurantList from "./RestaurantList.tsx";
import SelectContainer from "./SelectContainer.tsx";
import RestaurantDetailDrawer from "./RestaurantDetailDrawer.tsx";

interface AppState {
  filterOptions:any,
  isOpenDrawer:boolean
}

class App extends React.Component<AppState> {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        category: '전체',
        sorting: 'name',
      },
      isOpenDrawer: false,
      drawerSelectId: -1
    };

    this.onChangeFilterOptions = this.onChangeFilterOptions.bind(this);
    this.onToggleDrawer = this.onToggleDrawer.bind(this);
  }

  onChangeFilterOptions(e) {
    console.log(e);

    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        [e.target.name]: e.target.value,
      },
    });
  }

  onToggleDrawer(id) {
    this.setState({
      isOpenDrawer: !this.state.isOpenDrawer,
      drawerSelectId: id
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <SelectContainer
          onChangeFilterOptions={this.onChangeFilterOptions}
          filterOptions={this.state.filterOptions}
        />
        <RestaurantList filterOptions={this.state.filterOptions} onToggleDrawer={this.onToggleDrawer} />
        <RestaurantDetailDrawer isOpenDrawer={this.state.isOpenDrawer} restaurantId={this.state.drawerSelectId}/>
      </div>
    );
  }
}

export default App;
