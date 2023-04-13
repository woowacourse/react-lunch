import React from 'react';
import Header from './Header.tsx';
import RestaurantList from './RestaurantList.tsx';
import SelectContainer from './SelectContainer.tsx';
import RestaurantDetailDrawer from './RestaurantDetailDrawer.tsx';
import { DEFAULT_CATEGORY, DEFAULT_SORTING, NO_SELECT_ID } from './constant.js';

interface AppState {
  filterOptions: any;
  isOpenDrawer: boolean;
}
// TODO: State Type 선언
class App extends React.Component<AppState> {
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

  onChangeFilterOptions(e) {
    console.log(e);

    this.setState({
      filterOptions: {
        ...this.state.filterOptions,
        [e.target.name]: e.target.value,
      },
    });
  }
  // TODO: Toggle을 닫을 때는 id값을 어떻게 처리할지 고민하기
  onToggleDrawer(id:number = NO_SELECT_ID) {
    this.setState({
      isOpenDrawer: !this.state.isOpenDrawer,
      drawerSelectId: id,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SelectContainer
          onChangeFilterOptions={this.onChangeFilterOptions}
          filterOptions={this.state.filterOptions}
        />
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
