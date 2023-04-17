import { createContext } from 'react';
import type { State } from './App';

const Store = createContext<State | null>(null);

export default Store;
