import { PureComponent, ChangeEvent } from 'react';
import { Option } from '../../types/types';
import Filter from '../Filter/Filter';
import styles from './RestaurantFilter.module.css';

export default class RestaurantFilter extends PureComponent {
  handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
  }

  handleSortingChange(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
  }

  render() {
    const categoryOptions: Option[] = [
      { value: '전체', label: '전체' },
      { value: '한식', label: '한식' },
      { value: '중식', label: '중식' },
      { value: '일식', label: '일식' },
      { value: '양식', label: '양식' },
      { value: '아시안', label: '아시안' },
      { value: '기타', label: '기타' },
    ];

    const sortingOptions: Option[] = [
      { value: 'name', label: '이름순' },
      { value: 'distance', label: '거리순' },
    ];

    return (
      <section className={styles.container}>
        <Filter name="category" options={categoryOptions} onChange={this.handleCategoryChange} />
        <Filter name="sorting" options={sortingOptions} onChange={this.handleSortingChange} />
      </section>
    );
  }
}
