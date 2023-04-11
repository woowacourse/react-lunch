import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main />
			</div>
		);
	}
}

export default App;
