import { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
        <button type="button" className="gnb__button" aria-label="음식점 추가">
          <img src="/assets/add-button.png" alt="음식점 추가" />
        </button>
      </div>
    );
  }
}
