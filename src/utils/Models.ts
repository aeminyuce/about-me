import { ReactNode, ElementType } from 'react';

// App
export interface HeaderLinksProps {
    name: string;
    to: string;
    target: any;
}

export interface SocialLinksProps {
    title: string;
    url: string;
    icon: ElementType;
}

// Page Title
export interface PageTitleProps {
    title: string;
    children: ReactNode;
}

// Themes
export interface ThemeListProps {
	name: string;
	theme: string;
	color: string;
}

// Store Provider
export interface StoreProviderProps {
    children: ReactNode;
}

// Storages
export interface SetStorageProps {
	name: string;
	value: any;
	jsonData?: boolean;
}

export interface GetStorageProps {
	name: string;
	jsonData?: boolean;
	initialData?: string,
}

// Store reducer
export interface ReducerStateProps {
    theme: string;
}

export interface ReducerActionProps {
    type: string;
    theme?: string;
    style?: string;
    size?: string;
    copy?: string;
}
