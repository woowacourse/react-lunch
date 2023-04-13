import React, { Component, ReactNode } from "react";
import St from "./styled";

class Header extends Component {
  startPage() {
    window.location.reload();
  }
  render(): ReactNode {
    return <St.Header onClick={this.startPage}>점심 뭐 먹지</St.Header>;
  }
}
export default Header;
