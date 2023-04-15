import type { ChangeEventHandler } from "react";

import styles from "./SelectBox.module.css";

interface Props {
  name: string;
  options: readonly string[];
  onChange: ChangeEventHandler;
}

const SelectBox = (props: Props) => {
  const { name, options, onChange } = props;

  return (
    <select name={name} className={styles.container} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
