import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';
import type { State } from '../../App';
import type { Restaurant } from '../RestaurantItem/type';

function Modal() {
	const { isModalOpen, setIsModalOpen, restaurantList, modalId } = useContext(Store) as State;

	return createPortal(
		<dialog open={isModalOpen}>
			<div className={styles.modalBackdrop} />
			<div className={styles.modal}>
				<RestaurantItem
					restaurant={restaurantList?.find((restaurant) => restaurant.id === modalId) as Restaurant}
					isModal
				/>
				<button
					type="button"
					onClick={() => {
						setIsModalOpen(false);
						document.body.style.removeProperty('overflow');
					}}
				>
					닫기
				</button>
			</div>
		</dialog>,
		document.body
	);
}

export default Modal;
