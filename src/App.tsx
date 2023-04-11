import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainLayout />
			</div>
		);
	}
}

export default App;
