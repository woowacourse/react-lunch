import React from "react";
import styled from "styled-components";
import addButton from "../assets/images/add-button.png";

class Header extends React.Component {
  render() {
    return (
      <HeaderComponent>
        <Title>점심 뭐 먹지</Title>
        <Button onClick={() => alert('그런거 없다')}>
          <ButtonImage src={addButton} alt="음식점 추가" />
        </Button>
      </HeaderComponent>
    )
  }
}
export default Header;

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: #ec4a0a;
`

const Title = styled.div`
  color: #fcfcfd;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`

const Button = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`

const ButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`
