import Layout from './components/@common/Layout';
import RestaurantList from './components/RestaurantList';
import SelectBar from './components/SelectBar';
import useFilterOptions from './hooks/restaurants/useFilterOptions';

export default function App() {
  const { filterOptions, onChangeCategoryFilter, onChangeAlignFilter } =
    useFilterOptions();

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
