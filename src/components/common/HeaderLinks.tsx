import * as React from 'react';
import Button from 'uilab/react/Button';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { HeaderLinksProps } from '../../models/Page';
import { ShowGetInTouch } from './GetInTouchModal';
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconHeart } from 'uilab-icons/react/general/heart';

export default function () {
    const { api } = useStoreContext();
    const headerLinks = api?.header?.headerLinks;

    return (
        <nav aria-label='Main site navigation' className='ui-hidden-md'>
            <Button.Wrapper as='span' ease='1st' className='ui-sidebar-add-l ui-md-align-l ui-round-1st'>

                {headerLinks.map((item: HeaderLinksProps) => {
                    const isModal = item.modal ? () => ShowGetInTouch() : null;

                    return (
                        <Button key={item.name} ghost noease block='md' to={item.to} data={{ 'close': item.modal }} onClick={isModal} className='ui-m-2-r'>
                            {item.to === '/icons' &&
                                <>
                                    I<SvgIcon as='js' src={IconHeart} size='xs' opacity='no' className='ui-m-5-h ui-m-4-v' />
                                </>
                            }
                            {item.name}
                        </Button>
                    )
                })}

            </Button.Wrapper>
        </nav>
    )
}