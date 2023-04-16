import React, { useReducer } from 'react';
import { LunchDispatchContext, LunchStateContext } from '../hooks';
import initialState from '../store/initialState';
import reducer from '../store/reducer';

function LunchProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<LunchStateContext.Provider value={state}>
			<LunchDispatchContext.Provider value={dispatch}>{children}</LunchDispatchContext.Provider>
		</LunchStateContext.Provider>
	);
}

export default LunchProvider;
