import GlobalStyle from './style/global';
import Header from './components/Header';
import SelectBox from './components/SelectBox';
import { SelectType } from './types';
import { CATEGORY_OPTIONS, ORDER_OPTIONS } from './constants';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SelectBoxContainer>
        <SelectBox selectType={SelectType.category} options={CATEGORY_OPTIONS} />
        <SelectBox selectType={SelectType.order} options={ORDER_OPTIONS} />
      </SelectBoxContainer>
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
