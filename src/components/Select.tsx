import React, { Component } from 'react';
import styles from './Select.module.css';

class Select extends Component<{ options: string[] }> {
  render() {
    const { options }: { options: string[] } = this.props;
    return (
      <select className={styles.select}>
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
