import React from "react";
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
import { getFilteredArray, getSortedArray } from "./utils/arrayConverter";

interface StateType {
  restaurants: Restaurant[] | [];
  sorting: SortingUnion;
  category: CategoryUnion;
}

class App extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      restaurants: [],
      sorting: SELECT_OPTION.NAME,
      category: SELECT_OPTION.ALL,
    };
  }

  async componentDidMount() {
    const data = await getRestaurantData();

    this.setState({
      restaurants: data,
    });
  }

  handleSelect(select: SelectedValue) {
    if (select.type === SELECT_OPTION.SORTING) {
      this.setState({ sorting: select.value as SortingUnion });
    }

    if (select.type === SELECT_OPTION.CATEGORY) {
      this.setState({ category: select.value as CategoryUnion });
    }
  }

  setRestaurant() {
    const filteredRestaurants = getFilteredArray(
      this.state.restaurants,
      this.state.category
    );

    const sortedRestaurants = getSortedArray(
      filteredRestaurants,
      this.state.sorting
    );

    return sortedRestaurants;
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SelectSection handleSelect={this.handleSelect.bind(this)} />
          <RestaurantSection restaurants={this.setRestaurant()} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
