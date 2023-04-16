import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header";
import RestaurantSection from "./components/restaurantSection";
import SelectSection from "./components/selectSection";
import { SELECT_OPTION } from "./constant/select";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";
import { CategoryUnion, SortingUnion, SelectedValue } from "./types/select";

interface StateType {
  sorting: SortingUnion;
  category: CategoryUnion;
}

function App() {
  const [sorting, setSorting] = useState<SortingUnion>(SELECT_OPTION.NAME);
  const [category, setCategory] = useState<CategoryUnion>(SELECT_OPTION.ALL);

  function handleSelect(select: SelectedValue) {
    if (select.type === SELECT_OPTION.SORTING) {
      setSorting(select.value as SortingUnion);
    }

    if (select.type === SELECT_OPTION.CATEGORY) {
      setCategory(select.value as CategoryUnion);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SelectSection handleSelect={handleSelect} />
        <RestaurantSection sorting={sorting} category={category} />
      </ThemeProvider>
    </>
  );
}

export default App;
