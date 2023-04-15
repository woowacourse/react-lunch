import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: var(--font-color);
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Title className="text-title">점심 뭐 먹지</Title>
    </HeaderLayout>
  );
};

export default Header;
