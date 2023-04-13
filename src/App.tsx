import React from 'react';
import MainHeader from './MainHeader.tsx';
import RestaurantList from './RestaurantList.tsx';
import SelectContainer from './SelectContainer.tsx';
import RestaurantDetailDrawer from './RestaurantDetailDrawer.tsx';
import { DEFAULT_CATEGORY, DEFAULT_SORTING, NO_SELECT_ID } from './constant.ts';
import { FilterOption } from './type.js';

  type AppState = {
  filterOptions: FilterOption;
  isOpenDrawer: boolean;
  drawerSelectId: number;
}
class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        category: DEFAULT_CATEGORY,
        sorting: DEFAULT_SORTING,
      },
      isOpenDrawer: false,
      drawerSelectId: NO_SELECT_ID,
    };

    this.onChangeFilterOptions = this.onChangeFilterOptions.bind(this);
    this.onToggleDrawer = this.onToggleDrawer.bind(this);
  }

  onChangeFilterOptions(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        [e.target.name]: e.target.value,
      },
    });
  }

  onToggleDrawer(id: number = NO_SELECT_ID) {
    this.setState({
      isOpenDrawer: !this.state.isOpenDrawer,
      drawerSelectId: id,
    });
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <SelectContainer onChangeFilterOptions={this.onChangeFilterOptions} />
        <RestaurantList
          filterOptions={this.state.filterOptions}
          onToggleDrawer={this.onToggleDrawer}
        />
        <RestaurantDetailDrawer
          isOpenDrawer={this.state.isOpenDrawer}
          onToggleDrawer={this.onToggleDrawer}
          restaurantId={this.state.drawerSelectId}
        />
      </div>
    );
  }
}

export default App;
