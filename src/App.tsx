import { Component } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    );
  }
}
export default App;
