import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Restaurant from './components/Restaurant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Restaurant />
      </div>
    );
  }
}

export default App;
