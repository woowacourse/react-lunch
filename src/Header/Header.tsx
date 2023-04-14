import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header id="head" className="gnb">
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </header>
    );
  }
}

export default Header;
