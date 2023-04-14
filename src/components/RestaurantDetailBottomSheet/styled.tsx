import styled from "styled-components";

const FadeInUp = `
@keyframes fadeInUp {
  from {
      transform: translate3d(0, 100%, 0);
  }
  to {
      transform: translateZ(0);
  }
}
`;

const St = {
  Backdrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  `,
  BottomSheet: styled.div`
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 75vh;

    padding: 32px 16px;

    border-radius: 8px 8px 0px 0px;
    background: #ffffff;
    ${FadeInUp}
    animation: fadeInUp 0.5s;
  `,
  Detail: styled.div`
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px 8px;
    width: 100%;
    height: 100%;
  `,
  Title: styled.h3`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  `,
  Distance: styled.span`
    padding: 16px 0 8px;
    color: #ec4a0a;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
  Description: styled.p`
    padding-top: 8px;

    overflow-y: auto;

    word-wrap: break-word;
    width: 100%;
    height: 100%;
    max-height: 65%;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    @media (max-height: 670px) {
      max-height: 50%;
    }
  `,
  Link: styled.a`
    padding: 8px 0 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
  Button: styled.button`
    width: 100%;
    height: 44px;

    margin-top: auto;
    margin-right: 16px;

    border: none;
    border-radius: 8px;

    background: #ec4a0a;
    color: #ffffff;

    font-weight: 600;
    cursor: pointer;
  `,
};

export default St;
