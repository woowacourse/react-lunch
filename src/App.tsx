import { Component } from 'react';
import Header from './components/Header';
import Restaurant from './components/Restaurant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Restaurant />
      </div>
    );
  }
}

export default App;
