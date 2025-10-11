// utils
import type { PageTitleProps } from '../utils/Models';
import { useStoreContext } from '../layouts/StoreContext';

export default function PageTitle(props:PageTitleProps) {
    const { title, children } = props;
    const { metaData } = useStoreContext();

    const setTitle = title ? title + ' | ' : '';
    document.title = setTitle + metaData?.PROJECT_NAME;

    return children;
}