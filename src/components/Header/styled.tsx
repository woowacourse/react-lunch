import styled from "styled-components";

const St = {
  Header: styled.header`
    width: 100vw;
    height: 64px;
    line-height: 64px;

    position: fixed;

    padding-left: 22px;
    background-color: #ec4a0a;

    color: #fcfcfd;

    font-size: 20px;
    font-weight: 600;

    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      letter-spacing: 8px;
    }
  `,
};
export default St;
