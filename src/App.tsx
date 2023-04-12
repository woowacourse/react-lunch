import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
