export interface SizeListProps {
	name: string;
	size: string;
	selected: boolean;
}

export interface IconsListProps {
	category: string;
	icons: string[];
	length: number;
}

export interface IconDetailsProps {
	name?: string;
	category?: string;
	list?: any;
	spin?: string;
	onClick?(): void;
}