import { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
