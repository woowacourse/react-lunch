import { css } from 'styled-components';

const variables = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ellipsis: (lines) => css`
    display: -webkit-box;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
  `,
};

export default variables;
