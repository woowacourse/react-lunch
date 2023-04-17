import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantSection } from "./components/restaurantSection";
import { SelectSection } from "./components/selectSection";
import { SELECT_OPTION } from "./constant/select";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";
import { CategoryUnion, SortingUnion } from "./types/select";
import { Restaurant } from "./types/restaurant";
import { getRestaurantData } from "./api/getData";
import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
} from "./utils/arrayConverter";

const App = () => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [sorting, setSorting] = useState<SortingUnion>(SELECT_OPTION.NAME);
  const [category, setCategory] = useState<CategoryUnion>(SELECT_OPTION.ALL);

  useEffect(() => {
    const getInitialData = async () => {
      const data = await getRestaurantData();
      setAllRestaurants(data);
      setRestaurants(data);
    };

    getInitialData();
  }, []);

  useEffect(() => {
    arrangeRestaurants();
  }, [sorting, category]);

  const handleSelect = (type: string, value: string) => {
    if (type === SELECT_OPTION.SORTING) {
      setSorting(value as SortingUnion);
    }

    if (type === SELECT_OPTION.CATEGORY) {
      setCategory(value as CategoryUnion);
    }
  };

  const arrangeRestaurants = () => {
    const filteredRestaurants = getFilteredRestaurantsByCategory(
      allRestaurants,
      category
    );

    const sortedRestaurants = getSortedRestaurants(
      filteredRestaurants,
      sorting
    );

    setRestaurants(sortedRestaurants);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header handleClick={arrangeRestaurants} />
      <SelectSection handleSelect={handleSelect} />
      {restaurants && <RestaurantSection restaurants={restaurants} />}
    </ThemeProvider>
  );
};

export default App;
