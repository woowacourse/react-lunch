import React, { Component, ReactNode } from 'react';
import Select from '../Select';
import St from './styled';

class SelectBar extends Component {
  render(): ReactNode {
    return (
      <St.Layout>
        <Select
          options={['전체', '한식', '중식', '일식', '양식', '아시안', '기타']}
          onChange={() => {
            //
          }}
        />
        <Select
          options={['이름순', '거리순']}
          onChange={() => {
            //
          }}
        />
      </St.Layout>
    );
  }
}

export default SelectBar;
