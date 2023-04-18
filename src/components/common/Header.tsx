import styled from 'styled-components';
import { TitleText } from '../../style/typography';

const Header = () => {
  return (
    <HeaderLayout>
      <Title>점심 뭐 먹지</Title>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const Title = styled(TitleText)`
  color: var(--font-color);
`;

export default Header;
