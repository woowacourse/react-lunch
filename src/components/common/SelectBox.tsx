import { ChangeEventHandler, Component } from "react";

import styles from "./SelectBox.module.css";

interface Props {
  name: string;
  options: readonly string[];
  onChange: ChangeEventHandler;
}

const SelectBox = (props: Props) => {
  return (
    <select name={props.name} className={styles.container} onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
