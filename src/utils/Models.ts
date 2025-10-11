import { ReactNode, ElementType } from 'react';

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
    metaData: any;
    isMobile: boolean;
    theme: string;
    setTheme(name: string): string;
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

// Header
export interface HeaderLinksProps {
    name: string;
    to: string;
    click: any;
}

export interface SocialLinksProps {
    title: string;
    url: string;
    icon: ElementType;
}

// Home
export interface NavLinksProps {
    name: string;
    to: string;
}