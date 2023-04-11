import React from 'react';
import Header from './components/Header';
import SelectorSection from './components/SelectorSection';

class App extends React.Component {
	render() {
		return (
			<main className='App'>
				<Header />
				<SelectorSection />
			</main>
		);
	}
}

export default App;
