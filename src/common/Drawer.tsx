import React from 'react';

type DrawerProps = {
  isOpenDrawer: boolean;
};

const Drawer = ({ isOpenDrawer, children }:React.PropsWithChildren<DrawerProps>) => {
  return (
      <div className={`modal ${isOpenDrawer ? "modal--open" : ""}`}>
        <div className="modal-backdrop"></div>
        <div className="modal-container">{children}</div>
      </div>
    );
}

export default Drawer;
