import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

class App extends Component {
  state = {
    restaurants: null,
  };

  async componentDidMount() {
    const localStorageData = getLocalStorage('restaurants');

    if (localStorageData) {
      this.setState({ restaurants: localStorageData });
      return;
    }

    const response = await fetch('./mockData.json');

    const data = await response.json();

    setLocalStorage('restaurants', data);
    this.setState({ restaurants: data });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainLayout restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
