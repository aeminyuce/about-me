import { ReactNode } from 'react';

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

// Store Context
export interface StoreContextProps {
    isMobile: boolean;
    theme: string;
    setTheme(name: string): string;
    apiResponse: any;
}

export interface StoreProviderProps {
    children: ReactNode;
    initialValue: any;
}

// Page Title
export interface PageTitleProps {
    title: string;
    children: ReactNode;
}

// Theme List
export interface ThemeListProps {
	name: string;
	theme: string;
	color: string;
}