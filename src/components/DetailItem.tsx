import React, { ReactNode } from 'react';

interface Props{
    class: string;
    children: ReactNode;
}

class DetailItem extends React.Component<Props> {
  render(): React.ReactNode {
    return <div className={this.props.class}>{this.props.children}</div>;
  }
}

export default DetailItem;
