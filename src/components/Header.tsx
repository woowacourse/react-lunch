import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="gnb">
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </header>
    );
  }
}

export default Header;
