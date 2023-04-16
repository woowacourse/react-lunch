import React from 'react';
import { createPortal } from 'react-dom';
import Store from '../../store';
import { Restaurant } from '../../store/type';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';

class Modal extends React.PureComponent {
	private static findRestaurantById = (restaurantList?: Restaurant[], id?: string) =>
		restaurantList?.find((restaurant) => restaurant.id === id) as Restaurant;

	render() {
		return (
			<Store.Consumer>
				{(store) =>
					createPortal(
						<dialog open={store?.isModalOpen}>
							<div className={styles.modalBackdrop} />
							<div className={styles.modal}>
								<RestaurantItem restaurant={Modal.findRestaurantById(store?.restaurantList, store?.modalId)} isModal />
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
