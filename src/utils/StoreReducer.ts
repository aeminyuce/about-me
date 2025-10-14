// utils
import { setStorage } from './Storages';
import { CURRENT_THEME, PAGE_DATA, CALENDAR_DATA } from './Actions';

const updateStoreContext = (state: any, action: any) => {
	try {

		// themes
		if ([CURRENT_THEME].includes(action?.type)) {
			setStorage({
				name: CURRENT_THEME,
				value: action.theme,
			});

			return {
				...state,
				theme: action.theme,
			};
		}

		// fetch page data
		if ([PAGE_DATA].includes(action?.type)) {
			return {
				...state,
				apiResponse: action.result,
			};
		}

		// fetch calendar data
		if ([CALENDAR_DATA].includes(action?.type)) {
			return {
				...state,
				apiResponse: {
					...state.apiResponse,
					calendar: action.result,
				},
			};
		}

	} catch (e: any) {
		// run error logger
	}
}

const reducer = (state: any, action: any) => {
	return updateStoreContext(state, action);
}

export default reducer;