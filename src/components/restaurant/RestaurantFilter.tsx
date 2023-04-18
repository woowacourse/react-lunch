import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import { CATEGORIES, SORT_OPTIONS } from '../../constants';

type RestaurantFilterProps = {
  setFindOptions: (key: string, option: string) => void;
};

const RestaurantFilter = ({ setFindOptions }: RestaurantFilterProps) => {
  const setFilterOption = (option: string) => {
    setFindOptions('filterOption', option);
  };

  const setSortOption = (option: string) => {
    setFindOptions('sortOption', option);
  };

  return (
    <SelectBoxContainer>
      <SelectBox options={Object.values(CATEGORIES)} setOption={setFilterOption} />
      <SelectBox options={Object.values(SORT_OPTIONS)} setOption={setSortOption} />
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

export default RestaurantFilter;
