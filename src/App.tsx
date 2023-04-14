import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import RestaurantListContainer from './components/RestaurantListContainer';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <RestaurantListContainer></RestaurantListContainer>
      </>
    );
  }
}
export default App;
