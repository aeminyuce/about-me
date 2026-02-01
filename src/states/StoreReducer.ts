// misc
import { setStorage } from './Storages';
import {

	// state
	CURRENT_THEME, ICON_SIZE, ICON_COPY,

	// data
	PAGE_DATA, HOME_DATA, HOME_FEATURED_DATA, LAB_DATA

} from './Actions';

const updateStoreContext = (state: any, action: any) => {
	try {

		if ([CURRENT_THEME].includes(action?.type)) {

			// themes
			setStorage({
				name: CURRENT_THEME,
				value: action.theme,
			});

			return {
				...state,
				theme: action.theme,
			};

		} else if ([ICON_SIZE, ICON_COPY].includes(action?.type)) {

			// icons
			setStorage({
				name: action.type, // ICON_SIZE or ICON_COPY
				value: (action.type === ICON_SIZE ? action.iconSize : action.iconCopy),
			});

			return {
				...state,
				...(action.type === ICON_SIZE && { iconSize: action.result }),
				...(action.type === ICON_COPY && { iconCopy: action.result }),
			};

		} else if ([PAGE_DATA].includes(action?.type)) {

			// fetch page data
			return {
				...state,
				api: {
					...state.api,
					...action.result,
				},
			};

		} else {

			// fetch data from other pages
			return {
				...state,
				api: {
					...state.api,

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