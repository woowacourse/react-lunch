import { Component } from 'react';

import './style.css';

interface Props {
	restaurantData: any;
}

class Restaurant extends Component<Props> {
	render() {
		const { category, name, distance, description } = this.props.restaurantData;

		return (
			<li className="restaurant">
				<div className="restaurant__category">
					{/* TODO: Category별 아이콘 렌더링 */}
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="korean"
					>
						<path
							d="M30 15C30 6.72 23.28 0 15 0C6.72 0 0 6.72 0 15C0 20.535 3.705 25.29 9 27.375V30H21V27.375C26.295 25.29 30 20.535 30 15ZM27 15H21V4.62C24.585 6.705 27 10.575 27 15ZM18 3.39V15H12V3.39C12.96 3.15 13.965 3 15 3C16.035 3 17.04 3.15 18 3.39ZM3 15C3 10.575 5.415 6.705 9 4.62V15H3Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="restaurant__info">
					<div className="flex">
						<div>
							<h2 className="restaurant__name text-subtitle">{name}</h2>
							<span className="restaurant__distance text-body">
								캠퍼스부터 {distance}분 내
							</span>
						</div>
					</div>
					<p className="restaurant__description text-body">{description}</p>
				</div>
			</li>
		);
	}
}

export default Restaurant;
