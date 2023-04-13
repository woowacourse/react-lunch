import React from 'react';
import LunchApp from './containers/LunchApp';
import GlobalProvider from './containers/GlobalProvider';

class App extends React.Component {


  render() {

    return (
      <GlobalProvider>
        <LunchApp />
      </GlobalProvider>
    );
  }
}

export default App;
