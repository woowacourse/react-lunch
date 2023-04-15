import React from 'react';
import SelectBox from './SelectBox';
import { CRITERION } from '../../constants';
import { Criterion } from '../../types';

interface SortingProps {
  setCriterion: (newCriterion: Criterion) => void;
}

function SortingFilter({ setCriterion }: SortingProps) {
  const handleCriterionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCriterion(event.target.value as Criterion);
  };

  return <SelectBox filter={CRITERION} handleOptionChange={handleCriterionChange} />;
}

export default SortingFilter;
