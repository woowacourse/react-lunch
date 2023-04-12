import React, { Component, ReactNode } from 'react';
import Layout from './components/common/Layout';
import Select from './components/Select';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Layout>
          <Select
            options={['전체', '한식', '일식']}
            onChange={() => {
              //
            }}
          />
        </Layout>
      </>
    );
  }
}
export default App;
