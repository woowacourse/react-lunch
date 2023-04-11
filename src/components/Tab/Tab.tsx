import { Component } from 'react';

export class Tab extends Component {
  render() {
    return (
      <section className="restaurant-tab-container">
        <div className="restaurant-tab">
          <button className="tab-button">모든 음식점</button>
          <button className="tab-button">자주 가는 음식점</button>
        </div>
      </section>
    );
  }
}
