// utils
import { setStorage } from './Storages';
import { CURRENT_THEME } from './Actions';

const updateStoreContext = (state: any, action: any) => {
	try {

		if ([CURRENT_THEME].includes(action?.type)) {
			const theme = () => {
				setStorage({ name: CURRENT_THEME, value: action.theme });

				return {
					...state,
					theme: action.theme,
				};
			}

			return theme();
		}

	} catch (e: any) {
		// run error logger
	}
}

export const reducer = (state: any, action: any) => {
	return updateStoreContext(state, action);
}