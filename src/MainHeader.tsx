import React from 'react';
import Header from './common/Header.tsx';

class MainHeader extends React.Component {
  render() {
    return (
      <Header>
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </Header>
    );
  }
}

export default MainHeader;
