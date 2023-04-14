import React, { createContext, useState } from "react";
import RestaurantList from "./components/RestaurantList";
import mockData from "./data/mockData.json";
import { CATEGORY, SORTINGWAY } from "./types/Restaurant";
import SelectBox from "./components/SelectBox";
import Header from "./components/Header";
import styled from "styled-components";
import Modal from "./components/Modal";

export const RestaurantContext = createContext(null);

const App = () => {
  const [state, setState] = useState({
    restaurants: mockData,
    modalOpen: false,
    modalInfo: {},
    sortBy: "name",
    categorizeBy: "all",
  });

  const categoryOptions = Object.entries(CATEGORY).map(([label, value]) => ({
    label,
    value,
  }));

  const sortingWayOptions = Object.entries(SORTINGWAY).map(
    ([label, value]) => ({
      label,
      value,
    })
  );

  return (
    <>
      <RestaurantContext.Provider value={{ state, setState }}>
        <Header />
        <SelectContainer>
          <SelectBox name="categoryBy" options={categoryOptions} />
          <SelectBox name="sortBy" options={sortingWayOptions} />
        </SelectContainer>
        <RestaurantList />
        {state.modalOpen && (
          <Modal
            restaurant={state.modalInfo}
            closeModal={() => setState({ ...state, modalOpen: false })}
          />
        )}
      </RestaurantContext.Provider>
    </>
  );
};

export default App;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
