import "./index.css";
import { Component } from "react";
import RestaurantItem from "../RestaurantItem";
import { RestaurantProps } from "../../types/restaurant";
import mockData from "../../data/mockData.json";

export default class RestaurantList extends Component {
  render() {
    const dummyData: RestaurantProps[] = JSON.parse(JSON.stringify(mockData.restaurants));

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {dummyData.map((item) => (
            <RestaurantItem {...item} />
          ))}
        </ul>
      </section>
    );
  }
}
