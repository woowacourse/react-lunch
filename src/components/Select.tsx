import { PureComponent } from 'react';

interface SelectProps {
  children: () => JSX.Element;
}

export default class Select extends PureComponent<SelectProps> {
  render() {
    return <>{this.props.children()}</>;
  }
}
