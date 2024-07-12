/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/core/utils';

interface AuthState {
	signOut: () => void;
}

const _useAuth = create<AuthState>()(
	immer<AuthState>((set, get) => ({
		signOut: () => {},
	})),
);

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
