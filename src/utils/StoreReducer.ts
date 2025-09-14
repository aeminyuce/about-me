import { createContext } from 'react';

// utils
import { setStorage, getStorage } from './Storages';

// imports
import type { ReducerStateProps, ReducerActionProps } from './Models';

export const StoreContext = createContext({
	store: null,
	setStore: null,
});

// actions
export const actions = {
	theme: 'CURRENT_THEME',
}

export const StoreReducer = (state: ReducerStateProps, action: ReducerActionProps) => {
	const theme = () => {
		setStorage({ name: actions.theme, value: action.theme });
		return {
            ...state,
            theme: action.theme,
        };
	}

	switch (action?.type) {
		// themes
		case actions.theme:
			return theme();
	}
}

export const StoreInitials = {
    theme: getStorage({ name: actions.theme }),
}
