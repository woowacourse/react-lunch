import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;
  padding: 0px 16px;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textWhite};

  user-select: none;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;
