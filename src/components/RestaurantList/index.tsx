import "./index.css";
import { Component } from "react";
import RestaurantItem from "../RestaurantItem";
import { RestaurantProps } from "../../types/restaurant";

const dummyData: RestaurantProps[] = [
  {
    id: 1,
    name: "test1",
    category: "한식",
    distance: 5,
  },
  {
    id: 2,
    name: "test2",
    category: "중식",
    distance: 10,
  },
  {
    id: 3,
    name: "test3",
    category: "한식",
    distance: 5,
  },
];

export default class RestaurantList extends Component {
  render() {
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
