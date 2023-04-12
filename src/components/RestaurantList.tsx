import { Category, Restaurant, SortingType } from "../types/restaurant";

import React, { ChangeEvent } from "react";
import styled from "styled-components";

import RestaurantItem from "./RestaurantItem";

interface Props {
  restaurants: Restaurant[];
  openModal: (id: Restaurant["id"]) => void;
  setCategory: (category: Category) => void;
  setSortingType: (sortingType: SortingType) => void;
}

class RestaurantList extends React.Component<Props> {
  openDetailModal = (e: any) => {
    const { id } = e.target.closest("li");
    this.props.openModal(id);
  };

  render() {
    return (
      <StyledMain>
        <section className="restaurant-filter-container">
          <select
            name="category"
            id="category-filter"
            className="restaurant-filter"
            onChange={(e: ChangeEvent) => {
              if (!(e.target instanceof HTMLSelectElement)) return;

              const { value: category } = e.target;
              this.props.setCategory(category as Category);
            }}
          >
            <option value="전체">전체</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>

          <select
            name="sorting"
            id="sorting-filter"
            className="restaurant-filter"
            onChange={(e: ChangeEvent) => {
              if (!(e.target instanceof HTMLSelectElement)) return;

              const { value: sortingType } = e.target;
              this.props.setSortingType(sortingType as SortingType);
            }}
          >
            <option value="name">이름순</option>
            <option value="distance">거리순</option>
          </select>
        </section>

        <section className="restaurant-list-container">
          <ul onClick={this.openDetailModal} className="restaurant-list">
            {this.props.restaurants.map((restaurant) => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
              ></RestaurantItem>
            ))}
          </ul>
        </section>
      </StyledMain>
    );
  }
}

export default RestaurantList;

const StyledMain = styled.main`
  .restaurant-filter-container {
    display: flex;
    justify-content: space-between;

    padding: 0 16px;
    margin-top: 24px;
  }

  .restaurant-filter-container select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
  }

  .restaurant-filter {
    padding: 8px;
  }

  .restaurant-list-container {
    display: flex;
    flex-direction: column;

    padding: 0 16px;
    margin: 16px 0;
  }
`;
