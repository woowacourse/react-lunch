import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { GlobalStyle } from "./style/Globalstyle";
import { theme } from "./style/theme";

class App extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
