import { Component } from 'react';
import Header from './components/Header';
import Restaurant from './components/Restaurant';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Restaurant />
      </>
    );
  }
}

export default App;
