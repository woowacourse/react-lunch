import { PropsWithChildren } from 'react';
import Header from '../../Header';
import St from './styled';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <St.Layout>
      <Header />
      <St.Main>{children}</St.Main>
    </St.Layout>
  );
}
