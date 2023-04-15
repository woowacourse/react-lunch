import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import { useRestaurants } from './domain/hooks/useRestaurants';

const App = () => {
  const { restaurants } = useRestaurants();

  return (
    <div className="App">
      <Header />
      <MainLayout restaurants={restaurants} />
    </div>
  );
};

export default App;
