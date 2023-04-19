import styled from 'styled-components';

import { textTitle } from '../../../style/globalStyle';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

export const PageTitle = styled.h1`
  color: var(--font-color);
  ${textTitle}
`;
