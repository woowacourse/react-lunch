import React from 'react';

import * as S from './style';

type Props<T> = {
  options: T[];
  setOption: (option: T) => void;
};

const SelectBox = <T extends string>({ options, setOption }: Props<T>) => {
  return (
    <S.Select onChange={(e) => setOption(e.target.value as T)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </S.Select>
  );
};

export default SelectBox;
