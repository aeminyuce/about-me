// misc
import type { PageTitleProps } from '@models/Page';

export default function (props: PageTitleProps) {
    const { title, children } = props;

    const setTitle = title ? title + ' | ' : '';
    document.title = setTitle + import.meta.env.VITE_PROJECT_NAME;

    return children;
}