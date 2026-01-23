import * as React from 'react';
import Button from 'uilab/react/Button';

// misc
import type { HeaderLinksProps } from '../../models/Page';
import { ShowGetInTouch } from './GetInTouchModal';
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <nav aria-label='Main site navigation' className='ui-hidden-md'>
            <Button.Wrapper as='span' ease='1st' className='ui-sidebar-add-l ui-md-align-l ui-round-1st'>

                {apiResponse?.header?.headerLinks.map((item: HeaderLinksProps) => {
                    const isModal = item.modal ? () => ShowGetInTouch() : null;

                    return (
                        <Button key={item.name} ghost noease block='md' to={item.to} data={{ 'close': item.modal }} onClick={isModal} className='ui-m-2-r'>
                            {item.name}
                        </Button>
                    )
                })}

            </Button.Wrapper>
        </nav>
    )
}