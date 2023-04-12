import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      // ! HEADER 태그 추가함
      <header className="gnb">
        <a href="">
          <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
        </a>
      </header>
    );
  }
}

export default Header;
