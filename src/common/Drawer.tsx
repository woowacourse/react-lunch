import React from 'react';

type DrawerProps = {
  isOpenDrawer: boolean;
};

class Drawer extends React.PureComponent<React.PropsWithChildren<DrawerProps>> {
  render() {
    const { isOpenDrawer, children } = this.props;
    return (
      <div className={`modal ${isOpenDrawer ? "modal--open" : ""}`}>
        <div className="modal-backdrop"></div>
        <div className="modal-container">{children}</div>
      </div>
    );
  }
}

export default Drawer;
