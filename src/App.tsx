import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantSection } from "./components/restaurantSection";
import { SelectSection } from "./components/selectSection";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";
import { CategoryUnion, SortingUnion, SelectedValue } from "./types/select";

interface StateType {
  sorting: SortingUnion;
  category: CategoryUnion;
}

class App extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      sorting: "이름순",
      category: "전체",
    };
  }

  handleSelect(select: SelectedValue) {
    if (select.type === "sorting") {
      this.setState({ sorting: select.value as SortingUnion });
    }

    if (select.type === "category") {
      this.setState({ category: select.value as CategoryUnion });
    }
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SelectSection handleSelect={this.handleSelect.bind(this)} />
          <RestaurantSection
            sorting={this.state.sorting}
            category={this.state.category}
          />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
