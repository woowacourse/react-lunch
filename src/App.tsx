import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Restaurant';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
