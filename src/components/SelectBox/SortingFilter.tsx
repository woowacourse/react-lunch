import React from 'react';
import SelectBox from './SelectBox';
import { CRITERION } from '../../constants';
import { Criterion } from '../../types';

interface SortingProps {
  setCriterion: (newCriterion: Criterion) => void;
}

function SortingFilter(props: SortingProps) {
  const onChangeCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setCriterion(event.target.value as Criterion);
  };

  return <SelectBox filter={CRITERION} onOptionChange={onChangeCriterion} />;
}

export default SortingFilter;
