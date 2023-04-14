import { Component, ChangeEvent } from 'react';
import { Option } from '../../types/types';
import Filter from '../Filter/Filter';
import styles from './RestaurantFilter.module.css';
import { RestaurantFilterProps } from '../../types/types';

export default class RestaurantFilter extends Component<RestaurantFilterProps> {
  handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.onCategoryChange(event.target.value);
  };

  handleSortingChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.onSortingChange(event.target.value);
  };

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
      { value: '이름순', label: '이름순' },
      { value: '거리순', label: '거리순' },
    ];

    return (
      <section className={styles.container}>
        <Filter name="category" options={categoryOptions} onChange={this.handleCategoryChange} />
        <Filter name="sorting" options={sortingOptions} onChange={this.handleSortingChange} />
      </section>
    );
  }
}
