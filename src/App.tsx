import React from 'react';
import LunchApp from './containers/LunchApp';
import GlobalProvider from './containers/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <LunchApp />
    </GlobalProvider>
  )
}

export default App;
