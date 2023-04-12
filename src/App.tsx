import { Component, ReactNode } from 'react';
import './App.css';
import Header from './components/Header';
import Restaurant from './components/Restaurant';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <Header></Header>
        <Restaurant />
      </div>
    );
  }
}

export default App;
