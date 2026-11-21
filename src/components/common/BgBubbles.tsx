import Item from '@ui/Item';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { ThemeListProps } from '@models/Home';

export default function () {
    const { themeA, themeB } = useStoreContext();

    return (
        <Item as='div' className='bg-bubbles ui-circle-1st ui-ease-1st-bg ui-ease-1st-slow-2x'>
            <Item as='span' className={`ui-fill-dark-100 ${themeA}`} />
            <Item as='span' className={`ui-fill-dark-100 ${themeB}`} />
        </Item>
    )
}
