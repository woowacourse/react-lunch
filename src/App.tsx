import { useState } from 'react';
import Layout from './components/common/Layout';
import RestaurantList from './components/RestaurantList';
import SelectBar from './components/SelectBar';
import { ALIGN_FILTER, CATEGORY_FILTER } from './constants/restaurants';
import { AlignFilter, CategoryFilter } from './types/restaurants';

interface FilterOptions {
  category: CategoryFilter;
  align: AlignFilter;
}

export default function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: CATEGORY_FILTER[0],
    align: ALIGN_FILTER[0],
  });

  const onChangeCategoryFilter = (category: CategoryFilter) => {
    setFilterOptions((prev) => ({ ...prev, category }));
  };

  const onChangeAlignFilter = (align: AlignFilter) => {
    setFilterOptions((prev) => ({ ...prev, align }));
  };
  return (
    <Layout>
      <SelectBar
        onChangeCategoryFilter={onChangeCategoryFilter}
        onChangeAlignFilter={onChangeAlignFilter}
      />
      <RestaurantList filterOptions={filterOptions} />
    </Layout>
  );
}
