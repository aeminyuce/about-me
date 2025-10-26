// misc
import { CURRENT_THEME } from './Actions';
import type { SetStorageProps, GetStorageProps } from '../utils/Models';

export const setStorage = (props:SetStorageProps) => {
	const { name, value, jsonData } = props;

	const data = jsonData ? JSON.stringify(value) : value;
	sessionStorage.setItem(name, encodeURI(data));
}

export const getStorage = (props:GetStorageProps) => {
	const { name, jsonData } = props;

	let getData = sessionStorage.getItem(name);

	if (getData) {
		let data = decodeURI(getData);
		data = jsonData ? JSON.parse(data) : data;

		return data === 'null' ? null : data;

	} else return null;
}

export const storedData = {
	theme: getStorage({ name: CURRENT_THEME }) || 'ui-theme-purpleBlue', // default theme
}