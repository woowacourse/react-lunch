import React from 'react';
import SelectBox from './SelectBox';
import { CRITERION } from '../../constants';
import { Criterion } from '../../types';
import { isCriterionType } from '../../types/guard';

interface SortingProps {
  setCriterion: (newCriterion: Criterion) => void;
}

function SortingFilter({ setCriterion }: SortingProps) {
  const handleCriterionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isCriterionType(event.target.value)) setCriterion(event.target.value as Criterion);
  };

  return <SelectBox filter={CRITERION} handleOptionChange={handleCriterionChange} />;
}

export default SortingFilter;
