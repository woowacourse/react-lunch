import React from 'react';
import Select from './Select.tsx';
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from './constant.ts';

type SelectContainerProps = {
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

class SelectContainer extends React.Component<SelectContainerProps> {
  render() {
    return (
      <section className="restaurant-filter-container">
        <Select
          name="category"
          options={CATEGORY_OPTIONS}
          onChangeFilterOptions={this.props.onChangeFilterOptions}
        />
        <Select
          name="sorting"
          options={SORTING_OPTIONS}
          onChangeFilterOptions={this.props.onChangeFilterOptions}
        />
      </section>
    );
  }
}

export default SelectContainer;
