import './style.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="gnb">
        <a href="https://jeonjeunghoon.github.io/react-lunch">
          <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
        </a>
      </header>
    );
  }
}

export default Header;
