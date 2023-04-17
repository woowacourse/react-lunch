import React from 'react';
import './Header.css';

type HeaderProps = {
  children: string;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">{children}</h1>
    </header>
  );
};

export default React.memo(Header);
