import { Component } from "react";
import { CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";

class Restaurant extends Component<RestaurantInfo> {
  render() {
    return (
      <li>
        <img
          src={`../assets/category-${CATEGORY[this.props.category]}.png`}
          alt={this.props.category}
        />
        <div>
          <h3>{this.props.name}</h3>
          <p>캠퍼스부터 {this.props.takingTime}분 내</p>
          <p>{this.props.description}</p>
        </div>
      </li>
    );
  }
}

export default Restaurant;
