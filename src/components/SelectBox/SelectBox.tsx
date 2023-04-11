import { Component } from 'react';

export class SelectBox extends Component {
  render() {
    return (
      <section className="restaurant-filter-container">
        <select name="category" id="category-filter" className="restaurant-filter"></select>
      </section>
    );
  }
}
