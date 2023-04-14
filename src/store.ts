import React from 'react';
import type { State } from './App';

const Store = React.createContext<State | null>(null);

export default Store;
