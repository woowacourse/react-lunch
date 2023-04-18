import React, { useMemo } from 'react';
import styled from 'styled-components';
import addButton from '../assets/images/add-button.png';

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const memoizedTitle = useMemo(
    () => <Title>{props.title}</Title>,
    [props.title]
  );
  const memoizedButton = useMemo(
    () => (
      <Button onClick={() => alert('지원하지 않는 기능입니다.')}>
        <ButtonImage src={addButton} alt='음식점 추가' />
      </Button>
    ),
    []
  );

  return (
    <HeaderComponent>
      {memoizedTitle}
      {memoizedButton}
    </HeaderComponent>
  );
};
export default Header;

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: #ec4a0a;
`;

const Title = styled.div`
  color: #fcfcfd;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const Button = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
