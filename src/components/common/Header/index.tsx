import { Component, PropsWithChildren } from 'react';
import './Header.css';

type HeaderProps = {
  children: string;
};

export default class Header extends Component<PropsWithChildren<HeaderProps>> {
  render() {
    return (
      <header className="gnb">
        <h1 className="gnb__title text-title">{this.props.children}</h1>
      </header>
    );
  }
}
