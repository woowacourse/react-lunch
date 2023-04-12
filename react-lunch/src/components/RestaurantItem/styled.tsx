import styled from 'styled-components';

const St = {
  Layout: styled.li`
    display: flex;
    align-items: flex-start;

    padding: 16px 8px;

    border-bottom: 1px solid #e9eaed;
  `,

  LeftSection: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;

    margin-right: 16px;

    border-radius: 50%;
    background: #f6a88a;
  `,
  CategoryImg: styled.img`
    width: 36px;
    height: 36px;
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

export default St;
