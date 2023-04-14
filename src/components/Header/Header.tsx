import React from 'react';
import * as styled from './Header.styles';

class Header extends React.PureComponent {
  render() {
    return (
      <styled.Header>
        <styled.HeaderTitleText>점심 뭐 먹지</styled.HeaderTitleText>
      </styled.Header>
    );
  }
}

export default Header;
