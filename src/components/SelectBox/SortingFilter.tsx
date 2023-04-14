import React from 'react';
import SelectBox from './SelectBox';
import { CRITERION } from '../../constants';
import { Criterion } from '../../types';

interface SortingProps {
  setCriterion: (newCriterion: Criterion) => void;
}

class SortingFilter extends React.Component<SortingProps> {
  constructor(props: SortingProps) {
    super(props);
    this.onChangeCriterion = this.onChangeCriterion.bind(this);
  }

  onChangeCriterion(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setCriterion(event.target.value as Criterion);
  }

  render() {
    return <SelectBox filter={CRITERION} onOptionChange={this.onChangeCriterion} />;
  }
}

export default SortingFilter;
