import { createContext } from 'react';
import type { SelectorState } from './App';
import type { ModalState } from './hooks/useModal';

export const SelectorStore = createContext<SelectorState | null>(null);
export const ModalStore = createContext<ModalState | null>(null);
