import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RestaurantDataService from './domains/LunchDataService';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

RestaurantDataService.setInitialRestaurants();

root.render(<App />);
