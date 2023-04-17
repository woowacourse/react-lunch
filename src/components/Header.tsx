import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <header className="gnb">{children}</header>;
};

export default Header;
