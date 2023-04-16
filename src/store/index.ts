import React from 'react';
import { State } from './type';

const Store = React.createContext<State | null>(null);
export default Store;
