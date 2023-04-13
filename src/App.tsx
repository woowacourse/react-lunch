import React, { Component, PropsWithChildren, ReactNode } from 'react';
import Layout from './components/common/Layout';
import RestaurantList from './components/RestaurantList';
import SelectBar from './components/SelectBar';
import { alignFilter, categoryFilter } from './constants/restaurants';
import { AlignFilter, CategoryFilter } from './types/restaurants';

class App extends Component {
  state = { category: categoryFilter[0], align: alignFilter[0] };
  onChangeCategoryFilter: (category: CategoryFilter) => void;
  onChangeAlignFilter: (align: AlignFilter) => void;

  constructor(props: PropsWithChildren) {
    super(props);

    this.onChangeCategoryFilter = this.changeCategoryFilter.bind(this);
    this.onChangeAlignFilter = this.changeAlignFilter.bind(this);
  }

  changeCategoryFilter(category: CategoryFilter) {
    this.setState({ category });
  }

  changeAlignFilter(align: AlignFilter) {
    this.setState({ align });
  }

  render(): ReactNode {
    const { category, align } = this.state;

    return (
      <>
        <Layout>
          <SelectBar
            onChangeCategoryFilter={this.onChangeCategoryFilter}
            onChangeAlignFilter={this.onChangeAlignFilter}
          />
          <RestaurantList filterOptions={{ category, align }} />
        </Layout>
      </>
    );
  }
}
export default App;
