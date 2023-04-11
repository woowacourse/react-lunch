import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantItem } from "./components/restaurantItem";
import { SelectSection } from "./components/selectSection";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";

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
          <RestaurantItem
            name="hello"
            id="ahkjfd"
            category="한식"
            description="sdhfjksdhfjkds"
            takingTime={10}
            link="abcde.naver.com"
          />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
