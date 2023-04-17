import styled from 'styled-components';

const Styled = {
  Layout: styled.li`
    display: flex;
    align-items: flex-start;

    padding: 16px 8px;

    border-bottom: 1px solid #e9eaed;
  `,

  LeftSection: styled.section`
    margin-right: 16px;
  `,

  RightSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `,
  Title: styled.h3`
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  `,
  Distance: styled.span`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #ec4a0a;
  `,
  Detail: styled.p`
    display: -webkit-box;

    padding-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
};

export default Styled;
