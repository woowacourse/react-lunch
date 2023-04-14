import React from 'react';
import Header from './common/Header.tsx';

const MainHeader:React.FC = () => {
    return (
      <Header>
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </Header>
    );
}

export default MainHeader;
