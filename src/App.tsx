import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { appState, restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';

class App extends React.Component {
  state: appState = {
    category: '전체',
    filter: '이름순',
    wholeList: parseJson<Array<restaurant>>(JSON.stringify(mockData.restaurantList)),
  };

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <div>
          <Selector />
          <Selector />
        </div>
        <ItemList />
      </>
    );
  }
}

export default App;
