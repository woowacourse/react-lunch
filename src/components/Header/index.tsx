import { Component } from 'react';
import './style.css';

class Header extends Component {
	render() {
		return (
			<header className="gnb">
				<h1 className="gnb__title text-title">점심 뭐 먹지</h1>
				<button className="gnb__button">
					<svg
						width="34"
						height="24"
						viewBox="0 0 34 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.3333 6.66667H0.333344V10H20.3333V6.66667ZM20.3333 0H0.333344V3.33333H20.3333V0ZM27 13.3333V6.66667H23.6667V13.3333H17V16.6667H23.6667V23.3333H27V16.6667H33.6667V13.3333H27ZM0.333344 16.6667H13.6667V13.3333H0.333344V16.6667Z"
							fill="white"
						/>
					</svg>
				</button>
			</header>
		);
	}
}

export default Header;
