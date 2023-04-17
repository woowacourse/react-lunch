import type { ChangeEventHandler } from "react";

import styles from "./SelectBox.module.css";

interface SelectBoxProps {
  name: string;
  options: readonly string[];
  onChange: ChangeEventHandler;
}

const SelectBox = ({ name, options, onChange }: SelectBoxProps) => {
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
