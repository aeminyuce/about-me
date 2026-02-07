// misc
import { CURRENT_THEME_A, CURRENT_THEME_B, ICON_SIZE } from './Actions';
import type { SetStorageProps, GetStorageProps } from '../models/Page';

export const setStorage = (props: SetStorageProps) => {
	const { name, value, jsonData } = props;

	const data = jsonData ? JSON.stringify(value) : value;
	sessionStorage.setItem(name, encodeURI(data));
}

export const getStorage = (props: GetStorageProps) => {
	const { name, jsonData } = props;

	let getData = sessionStorage.getItem(name);

	if (getData) {
		let data = decodeURI(getData);
		data = jsonData ? JSON.parse(data) : data;

		return data === 'null' ? null : data;

	} else return null;
}

export const storedData = {
	api: {},
	themeA: getStorage({ name: CURRENT_THEME_A }) || 'ui-theme-purpleBlue', // default theme type A
	themeB: getStorage({ name: CURRENT_THEME_B }) || 'ui-theme-redPurple', // default theme type B
	iconSize: getStorage({ name: ICON_SIZE }) || 'xl', // default icon size
}