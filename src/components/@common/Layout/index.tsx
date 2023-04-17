import { PropsWithChildren } from 'react';
import Header from '../../Header';
import Styled from './styled';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Styled.Layout>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </Styled.Layout>
  );
}
