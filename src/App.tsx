import GlobalStyle from './style/global';
import Header from './components/Header';
import SelectBox from './components/SelectBox';
import { CategoryKind, SelectKind } from './types';
import { CATEGORY_OPTIONS, ORDER_OPTIONS } from './constants';
import styled from 'styled-components';
import RestaurantItem from './components/RestaurantItem';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SelectBoxContainer>
        <SelectBox selectType={SelectKind.category} options={CATEGORY_OPTIONS} />
        <SelectBox selectType={SelectKind.order} options={ORDER_OPTIONS} />
      </SelectBoxContainer>
      {/* <RestaurantItem category={CategoryKind.korean} name={'50년 전통 국밥'} distance={10} description={'fff'} /> */}
    </div>
  );
}

const SelectBoxContainer = styled.div`
  width: '100%';
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;

export default App;
