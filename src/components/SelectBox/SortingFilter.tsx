import React from 'react';
import SelectBox from './SelectBox';
import { CRITERION, CRITERION_LIST } from '../../constants';
import { Criterion } from '../../types';

interface SortingProps {
  setCriterion: (newCriterion: Criterion) => void;
}

const isCriterion = (filter: string): filter is Criterion => {
  if (CRITERION_LIST.includes(filter)) return true;
  return false;
};

function SortingFilter({ setCriterion }: SortingProps) {
  const onChangeCriterion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isCriterion(event.target.value)) setCriterion(event.target.value);
  };

  return <SelectBox filter={CRITERION} onOptionChange={onChangeCriterion} />;
}

export default SortingFilter;
