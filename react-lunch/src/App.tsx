import React, { Component, ReactNode } from 'react';
import Layout from './components/common/Layout';
import Select from './components/Select';
import SelectBar from './components/SelectBar';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Layout>
          <SelectBar />
        </Layout>
      </>
    );
  }
}
export default App;
