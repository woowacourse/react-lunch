import { Component } from 'react';
import { Header, Modal, RestaurantItems, SelectBox } from './components';
import { GlobalStyle } from './global-style';
import { CategoryFilter, SortFilter } from './types';

import styled from 'styled-components';

type Props = {};
type State = {
  categoryOptions: CategoryFilter[];
  filterOptions: SortFilter[];
};
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categoryOptions: ['전체', '한식', '중식', '일식', '아시안', '양식', '기타'],
      filterOptions: ['거리순', '이름순'],
    };
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <Header></Header>
          <FilterContainer>
            <SelectBox options={this.state.categoryOptions}></SelectBox>
            <SelectBox options={this.state.filterOptions}></SelectBox>
          </FilterContainer>
          <RestaurantItems></RestaurantItems>
          <Modal></Modal>
        </div>
      </>
    );
  }
}

const FilterContainer = styled.section`
  display: flex;

  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

export default App;
