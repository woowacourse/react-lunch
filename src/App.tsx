import GlobalStyle from './style/global';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <RestaurantList />
    </div>
  );
}

export default App;
