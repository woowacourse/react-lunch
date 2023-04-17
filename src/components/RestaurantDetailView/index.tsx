import { Restaurant } from '../../types';
import RestaurantInfo from '../RestaurantInfo';
import './RestaurantDetailView.css';

type RestaurantDetailViewProps = {
  restaurant: Restaurant;
};

export default function RestaurantDetailView({ restaurant }: RestaurantDetailViewProps) {
  return (
    <div className="detail-view">
      <RestaurantInfo restaurant={restaurant} />
    </div>
  );
}
