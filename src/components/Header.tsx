import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);

  .gnb__title {
    color: #fcfcfd;
  }

  .gnb__button {
    height: 40px;

    border: none;
    border-radius: 8px;
    background: transparent;

    font-size: 24px;
    cursor: pointer;
  }

  .gnb__button img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
        <button type="button" className="gnb__button" aria-label="음식점 추가">
          <img src="./add-button.png" alt="음식점 추가" />
        </button>
      </StyledHeader>
    );
  }
}

export default Header;
