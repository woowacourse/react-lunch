import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantSection } from "./components/restaurantSection";
import { SelectSection } from "./components/selectSection";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";
import { RestaurantItemPropsType } from "./types/restaurant";

const restaurants = [
  {
    id: "ahkjfd",
    category: "한식",
    name: "hello",
    takingTime: 10,
    description: "sdhfjksdhfjkds",
    link: "abcde.naver.com",
  } as RestaurantItemPropsType,
];

class App extends React.Component {
  handleSelect(type: string, selectedOption: string) {
    if (type === "sorting") {
      console.log(selectedOption);
    }

    if (type === "category") {
      console.log(selectedOption);
    }
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SelectSection handleSelect={this.handleSelect} />
          <RestaurantSection restaurants={restaurants} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
