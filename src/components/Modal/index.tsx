import React from 'react';
import { createPortal } from 'react-dom';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import type { Restaurant } from '../RestaurantItem/type';
import styles from './Modal.module.css';

class Modal extends React.PureComponent {
	render() {
		return (
			<Store.Consumer>
				{(store) =>
					createPortal(
						<dialog open={store?.isModalOpen}>
							<div className={styles.modalBackdrop} />
							<div className={styles.modal}>
								<RestaurantItem
									restaurant={store?.restaurantList.find((restaurant) => restaurant.id === store.modalId) as Restaurant}
									isModal
								/>
								<button
									type="button"
									onClick={() => {
										store?.toggleModal();
										document.body.style.removeProperty('overflow');
									}}
								>
									닫기
								</button>
							</div>
						</dialog>,
						document.body
					)
				}
			</Store.Consumer>
		);
	}
}

export default Modal;
