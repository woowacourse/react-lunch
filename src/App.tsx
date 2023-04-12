import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { RestaurantSection } from "./components/restaurantSection";
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
          <RestaurantSection />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
