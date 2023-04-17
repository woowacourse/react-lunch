import React from 'react';

type DrawerProps = {
  isOpenDrawer: boolean;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpenDrawer, children }) => {
  return (
    <div className={`modal ${isOpenDrawer && 'modal--open'}`}>
      <div className="modal-backdrop"></div>
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Drawer;
