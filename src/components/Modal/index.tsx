import React from 'react';
import { createPortal } from 'react-dom';
import { useLunchDispatch, useLunchState } from '../../hooks';
import { TOGGLE_MODAL } from '../../store/action';
import { Restaurant } from '../../store/type';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';

const findRestaurantById = (restaurantList: Restaurant[], id: string) =>
	restaurantList.find((restaurant) => restaurant.id === id) as Restaurant;

function Modal() {
	const state = useLunchState();
	const dispatch = useLunchDispatch();

	const handleCloseModal = () => {
		dispatch({ type: TOGGLE_MODAL });
		document.body.style.removeProperty('overflow');
	};

	return (
		<>
			{createPortal(
				<dialog open={state.isModalOpen}>
					<div className={styles.modalBackdrop} />
					<div className={styles.modal}>
						<RestaurantItem restaurant={findRestaurantById(state.restaurantList, state.modalId)} isModal />
						<button type="button" onClick={handleCloseModal}>
							닫기
						</button>
					</div>
				</dialog>,
				document.body
			)}
		</>
	);
}

export default Modal;
