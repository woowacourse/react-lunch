import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h3 id="header_title">점심 뭐먹지</h3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;

  position: fixed;
  top: 0;

  padding: 0 16px;
  background: var(--primary-color);

  & > h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: var(--grey-100);

    cursor: pointer;
    :active {
      transform: scale(1.02);
    }
  }
`;

export default Header;
