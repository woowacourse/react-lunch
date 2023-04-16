import { createContext, Dispatch, useContext } from 'react';
import { Action, State } from '../store/type';

export const LunchStateContext = createContext<State | null>(null);
export const LunchDispatchContext = createContext<Dispatch<Action> | null>(null);

export function useLunchState() {
	const state = useContext(LunchStateContext);
	if (!state) throw new Error('Cannot find LunchStateProvider');
	return state;
}

export function useLunchDispatch() {
	const dispatch = useContext(LunchDispatchContext);
	if (!dispatch) throw new Error('Cannot find LunchDispatchProvider');
	return dispatch;
}
