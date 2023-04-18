import React from 'react';

import type { DrawerProps } from '../util/type';

const Drawer = ({ isOpenDrawer, children }: DrawerProps) => {
  return (
    <div className={`modal ${isOpenDrawer && 'modal--open'}`}>
      <div className="modal-backdrop"></div>
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Drawer;
