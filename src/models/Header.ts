import { ElementType } from 'react';

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