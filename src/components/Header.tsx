import React from "react";

class Header extends React.Component {
  shouldComponentUpdate(): boolean {
    return false;
  }
  render() {
    return (
      <header className="gnb">
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </header>
    );
  }
}

export default React.memo(Header);
