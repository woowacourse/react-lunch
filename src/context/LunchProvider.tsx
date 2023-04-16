import React, { useMemo, useReducer } from 'react';
import { LunchDispatchContext, LunchStateContext } from '../hooks';
import initialState from '../store/initialState';
import reducer from '../store/reducer';

function LunchProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <LunchStateContext.Provider value={value.state}>
      <LunchDispatchContext.Provider value={value.dispatch}>
        {children}
      </LunchDispatchContext.Provider>
    </LunchStateContext.Provider>
  );
}

export default React.memo(LunchProvider);
