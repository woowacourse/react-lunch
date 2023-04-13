import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};
class Header extends React.Component<HeaderProps> {
  render() {
    return <header className="gnb">{this.props.children}</header>;
  }
}

export default Header;
