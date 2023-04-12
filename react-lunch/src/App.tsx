import React, { Component, ReactNode } from 'react';
import Layout from './components/common/Layout';
import RestaurantList from './components/RestaurantList';
import SelectBar from './components/SelectBar';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Layout>
          <SelectBar />
          <RestaurantList />
        </Layout>
      </>
    );
  }
}
export default App;
