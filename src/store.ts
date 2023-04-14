import React from 'react';
import type { State } from './App';

const Store = React.createContext<State>({} as State);

export default Store;
