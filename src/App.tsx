import React from 'react';
import Header from './components/Header/Header';
import RestaurantList from './components/RestaurantList/RestaurantList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="점심 뭐 먹지" />
        <RestaurantList />
      </div>
    );
  }
}

export default App;
