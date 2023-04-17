import { Component } from "react";
import type { ChangeEvent } from "react";
import SelectBox from "./common/SelectBox";
import { CATEGORIES, SELECT_NAME, SORTING } from "../constants/options";

import styles from "./RestaurantFilterContainer.module.css";

interface Props {
  selectOptions: (key: string, option: string) => void;
}

const RestaurantFilterContainer = (props: Props) => {
  const onChangeCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    props.selectOptions(SELECT_NAME.CATEGORY, event.target.value);
  };

  const onChangeSortingSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    props.selectOptions(SELECT_NAME.SORTING, event.target.value);
  };

  return (
    <section className={styles.container}>
      <SelectBox name={SELECT_NAME.CATEGORY} options={CATEGORIES} onChange={onChangeCategorySelect} />
      <SelectBox name={SELECT_NAME.SORTING} options={SORTING} onChange={onChangeSortingSelect} />
    </section>
  );
};

export default RestaurantFilterContainer;
