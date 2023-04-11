import { Component } from 'react';

export default class SortFilter extends Component {
  render() {
    return (
      <select name="sorting" id="sorting-filter" className="restaurant-filter">
        <option value="name">이름순</option>
        <option value="distance">거리순</option>
      </select>
    );
  }
}
