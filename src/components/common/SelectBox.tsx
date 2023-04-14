import { ChangeEventHandler, Component } from "react";

import styles from "./SelectBox.module.css";

interface Props {
  name: string;
  options: readonly string[];
  onChange: ChangeEventHandler;
}

class SelectBox extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <select name={this.props.name} className={styles.container} onChange={this.props.onChange}>
        {this.props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectBox;
