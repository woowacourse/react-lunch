import variables from 'components/styles/variables';
import styled from 'styled-components';

export const Styled = {
  Button: styled.button`
    width: 100%;
    height: 44px;

    margin-right: 16px;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    cursor: pointer;
  `,

  Restaurant: {
    CategoryImgWrapper: styled.div`
      ${variables.flexCenter}
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;

      margin-right: 16px;

      border-radius: 50%;
      background: var(--lighten-color);

      .img {
        width: 36px;
        height: 36px;
      }
    `,

    InfoWrapper: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
    `,

    Name: styled.h3`
      margin: 0;
      font: var(--text-subtitle);
    `,

    Distance: styled.span`
      color: var(--primary-color);
      font: var(--text-body);
    `,

    Description: styled.p`
      font: var(--text-body);
    `,
  },
};
