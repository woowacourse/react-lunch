import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantSection } from "./components/restaurantSection";
import { SelectSection } from "./components/selectSection";
import { SELECT_OPTION } from "./constant/select";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";
import { CategoryUnion, SortingUnion, SelectedValue } from "./types/select";
import { Restaurant } from "./types/restaurant";
import { getRestaurantData } from "./api/getData";
import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
} from "./utils/arrayConverter";

const App = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [sorting, setSorting] = useState<SortingUnion>(SELECT_OPTION.NAME);
  const [category, setCategory] = useState<CategoryUnion>(SELECT_OPTION.ALL);

  useEffect(() => {
    const getInitialData = async () => {
      const data = await getRestaurantData();
      setRestaurants(data);
    };

    getInitialData();
  }, []);

  const handleSelect = (select: SelectedValue) => {
    if (select.type === SELECT_OPTION.SORTING) {
      setSorting(select.value as SortingUnion);
    }

    if (select.type === SELECT_OPTION.CATEGORY) {
      setCategory(select.value as CategoryUnion);
    }

    arrangeRestaurants();
  };

  const arrangeRestaurants = () => {
    const filteredRestaurants = getFilteredRestaurantsByCategory(
      restaurants,
      category
    );

    return getSortedRestaurants(filteredRestaurants, sorting);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SelectSection handleSelect={handleSelect} />
      <RestaurantSection restaurants={arrangeRestaurants()} />
    </ThemeProvider>
  );
};

export default App;
