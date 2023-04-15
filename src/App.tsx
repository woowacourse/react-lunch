import './css/App.css';

import Header from './components/Header';
import RestaurantListContainer from './components/RestaurantListContainer';

import { useRestaurants } from './domain/hooks/useRestaurants';

const App = () => {
  const { restaurants } = useRestaurants();

  return (
    <div className="App">
      <Header />
      <RestaurantListContainer restaurants={restaurants} />
    </div>
  );
};

export default App;
