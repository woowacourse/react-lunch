import { PureComponent } from 'react';
import { RestaurantFilterProps } from '../../types/types';
import styles from './Filter.module.css';

export default class Filter extends PureComponent<RestaurantFilterProps> {
  render() {
    const { name, options, onChange } = this.props;

    const optionElements = options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });

    return (
      <select className={styles.filter} name={name} onChange={onChange}>
        {optionElements}
      </select>
    );
  }
}
