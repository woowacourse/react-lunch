import { Component, ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export class Layout extends Component<LayoutProps> {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
