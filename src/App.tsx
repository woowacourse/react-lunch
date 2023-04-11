import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <RestaurantList
          filterOptions={{ category: '한식', sort: '이름순' }}
        ></RestaurantList>
      </>
    );
  }
}
export default App;
