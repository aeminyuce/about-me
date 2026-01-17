// misc
import { setStorage } from './Storages';
import { CURRENT_THEME, PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA } from './Actions';

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

		} else if ([PAGE_DATA].includes(action?.type)) {

			// fetch page data
			return {
				...state,
				apiResponse: {
					...state.apiResponse,
					...action.result,
				},
			};

		} else {

			// fetch data from other pages
			return {
				...state,
				apiResponse: {
					...state.apiResponse,

					// home
					...(action.type === HOME_DATA && { home: action.result }),
					...(action.type === HOME_FEATURED_DATA && { home_featured: action.result }),

					// lab
					...(action.type === LAB_DATA && { lab: action.result }),
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