import React from "react";
import RestaurantItem from "./RestaurantItem.tsx";
import { Restaurant } from "./type";

type StateType = {
  restaurantList: Omit<Restaurant,"link">[];
}

class RestaurantList extends React.Component {
    state:StateType;

    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [{ id:0, title: "얌샘김밥", category: '한식', distance:5, description:"김밥"}]
        }
    }

    // 화면에 떴을 때
    componentDidMount(): void {
      
    }

    // 리렌더링 될 때
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    
    }

    render() {
      return (
        <section className="restaurant-list-container">
            <ul className="restaurant-list">
            {this.state.restaurantList.map((restaurant) => <RestaurantItem key={restaurant.id} restaurant={restaurant}/>)}
            </ul>
        </section>
      )
    }
}

export default RestaurantList;