import { Component } from 'react';

export default class RestaurantItem extends Component {
  render() {
    return (
      <li className="restaurant">
        <div className="restaurant__category">
          <img src="./category-chinese.png" alt="중식" className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">친친</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 5분 내</span>
          <p className="restaurant__description text-body">
            Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를
            펼쳐갑니다
          </p>
        </div>
      </li>
    );
  }
}
