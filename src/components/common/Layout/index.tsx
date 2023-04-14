import React, { Component, PropsWithChildren, ReactNode } from "react";
import Header from "../../Header";
import St from "./styled";

class Layout extends Component<PropsWithChildren> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render(): ReactNode {
    return (
      <St.Layout>
        <Header />
        <St.Main>{this.props.children}</St.Main>
      </St.Layout>
    );
  }
}

export default Layout;
