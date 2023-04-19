import RestaurantList from './components/RestaurantList';
import { useContext } from 'react';
import { CATEGORY, SORTINGWAY } from './types/Restaurant';
import SelectBox from './components/SelectBox';
import Header from './components/Header';
import styled from 'styled-components';
import Modal from './components/Modal';
import { RestaurantContext } from './containers/GlobalProvider';

const App = () => {
  const categoryOptions = Object.entries(CATEGORY).map(([label, value]) => ({
    label,
    value,
  }));

  const sortingWayOptions = Object.entries(SORTINGWAY).map(
    ([label, value]) => ({
      label,
      value,
    })
  );

  const { modalOpen, modalInfo } = useContext(RestaurantContext);
  console.log(modalOpen);
  return (
    <>
      <Header title='점심 뭐 먹지' />
      <SelectContainer>
        <SelectBox name='categorizeBy' options={categoryOptions} />
        <SelectBox name='sortBy' options={sortingWayOptions} />
      </SelectContainer>
      <RestaurantList />
      {modalOpen && <Modal restaurant={modalInfo} />}
    </>
  );
};

export default App;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
