import "./index.css";
import { Component } from "react";
import { CategoryImagePath } from "../../data/CategoryImagePath";
import { Restaurant } from "../../types/restaurant";

export default class RestaurantItem extends Component<Restaurant> {
  render() {
    return (
      <li className="restaurant">
        <div className="restaurant__category">
          <img src={CategoryImagePath[this.props.category]} alt={this.props.category} className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{this.props.name}</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 {this.props.distance}분 내</span>
          <p className="restaurant__description text-body">{this.props.description}</p>
        </div>
      </li>
    );
  }
}
