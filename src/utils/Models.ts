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

// Header
export interface HeaderLinksProps {
    name: string;
    to: string;
    modal: boolean;
}

export interface SocialLinksProps {
    title: string;
    url: string;
    icon: ElementType;
}

// Nav
export interface NavLinksProps {
    name: string;
    to: string;
}

// Home
export interface PeopleListProps {
    avatar?: string;
    avatarText?: string;
    jobTitle: string;
    description: string;
    url: string;
}
export interface PeopleMoreListProps {
    avatar?: string;
    avatarText?: string;
    jobTitle: string;
}
export interface ReportsListProps {
    name: string;
    percent: string;
    reports: string;
    chartPercent: number;
}