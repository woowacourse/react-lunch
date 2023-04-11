import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { Select } from "./components/select";
import { SelectSection } from "./components/selectSection";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <SelectSection />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
