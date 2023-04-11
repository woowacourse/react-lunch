import { Component } from 'react';
import { Header, Modal, RestaurantItems, Tab } from './components';

import './index.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Tab></Tab>
        <RestaurantItems></RestaurantItems>
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
