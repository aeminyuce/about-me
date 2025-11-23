import * as React from 'react';
import Button from 'uilab/react/Button';

// misc
import type { HeaderLinksProps } from '../../utils/Models';
import { ShowGetInTouch } from './GetInTouchModal';
import { useStoreContext } from '../../states/StoreContext';

export default function () {
    const { apiResponse } = useStoreContext();

    return (
        <span className='ui-hidden-md'>
            <span className='ui-ease-1st-btn ui-sidebar-add-l'>

                {apiResponse?.header?.headerLinks.map((item: HeaderLinksProps) => {
                    const isModal = item.modal ? () => ShowGetInTouch() : null;

                    return (
                        <Button key={item.name} ghost noease to={item.to} onClick={isModal} className='ui-m-2-r ui-round'>
                            {item.name}
                        </Button>
                    )
                })}

            </span>
        </span>
    )
}