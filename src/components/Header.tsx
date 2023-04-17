import React from 'react';

import type { HeaderProps } from '../util/type';

const Header = ({ children }: HeaderProps) => {
  return <header className="gnb">{children}</header>;
};

export default Header;
