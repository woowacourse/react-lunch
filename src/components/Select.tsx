import React, { ChangeEvent, Component } from 'react';
import styles from './Select.module.css';

class Select extends Component<{ options: string[]; onChange: (event: ChangeEvent<HTMLSelectElement>) => void }> {
  render() {
    const { options, onChange } = this.props;
    return (
      <select className={styles.select} onChange={onChange}>
        {options.map((optionName: string) => (
          <option key={optionName} value={optionName}>
            {optionName}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
