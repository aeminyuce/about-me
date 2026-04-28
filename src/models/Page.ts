import { ReactNode, ReactEventHandler, ElementType } from 'react';

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
    themeA: string;
    themeB: string;
    setThemeA(name: string): string;
    setThemeB(name: string): string;
    iconSize: string;
    setIconSize(name: string): string;
    iconCopy: string;
    api: any;
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

// Description
export interface DescriptionProps {
    children: ReactNode;
}

// Preview
export interface PreviewProps {
    children: ReactNode;
    playPos?: 'tl' | 'tr' | 'br' | 'bl';
    play?: ReactEventHandler;
    className?: string;
}