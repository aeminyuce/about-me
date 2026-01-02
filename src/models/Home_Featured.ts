export interface UserActivityProps {
    id: string;
    time: string;
    activity: string;
    url: string;
}
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