import styled from 'styled-components';
export const Header = () => {
  return (
    <HeaderGnb>
      <HeaderTitle className="text-title">점심 뭐 먹지</HeaderTitle>
    </HeaderGnb>
  );
};

const HeaderGnb = styled.header`
  display: flex;
  align-items: center;
  height: 64px;

  padding: 0 16px;
  background-color: var(--primary-color);
`;

const HeaderTitle = styled.h1`
  color: #fcfcfd;
`;
