// misc
import type { PageTitleProps } from '../../models/Page';
import { useStoreContext } from '../../states/StoreContext';

export default function (props: PageTitleProps) {
    const { title, children } = props;

    const setTitle = title ? title + ' | ' : '';
    document.title = setTitle + process.env.PROJECT_NAME;

    return children;
}