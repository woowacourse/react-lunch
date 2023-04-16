import { CHANGE_CATEGORY, CHANGE_MODAL_ID, CHANGE_SORT_STATE, TOGGLE_MODAL } from './action';
import { filterRestaurantList, sortRestaurantList } from './domain';
import { Action, State } from './type';

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case TOGGLE_MODAL:
			return { ...state, isModalOpen: !state.isModalOpen };

		case CHANGE_CATEGORY:
			return {
				...state,
				category: action.payload.category,
				restaurantList: filterRestaurantList(action.payload.category, state.sort),
			};

		case CHANGE_SORT_STATE:
			return {
				...state,
				sort: action.payload.sort,
				restaurantList: sortRestaurantList(state.restaurantList, action.payload.sort),
			};

		case CHANGE_MODAL_ID:
			return { ...state, modalId: action.payload.modalId };

		default:
			return state;
	}
}

export default reducer;
