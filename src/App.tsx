import React from "react";
import Header from "./Header.tsx";
import RestaurantList from "./RestaurantList.tsx";
import SelectContainer from "./SelectContainer.tsx";

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
    console.log('ONTOGGLE',id);
    this.setState({
      isOpenDrawer: !this.state.isOpenDrawer,
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
      </div>
    );
  }
}

export default App;
