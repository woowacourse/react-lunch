import { Component } from 'react';
import { Header, Modal, RestaurantItems, Tab } from './components';
import { GlobalStyle } from './global-style';
// import './index.css';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <Header></Header>
          <Tab></Tab>
          <RestaurantItems></RestaurantItems>
          <Modal></Modal>
        </div>
      </>
    );
  }
}

export default App;
