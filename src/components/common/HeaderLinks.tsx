import Button from '@ui/Button';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { HeaderLinksProps } from '@models/Page';
import { showGetInTouch } from '@helpers/General'

// assets
import { IconHeart } from '@icon/general/heart';

export default function () {
    const { api } = useStoreContext();

    return (
        <Item as='nav' aria-label='Main site navigation' className='ui-hide-md'>
            <Button.Wrapper as='span' ease='1st' align='l' className='ui-sidebar-add-l ui-round-1st'>

                {api?.header?.headerLinks?.map((item: HeaderLinksProps) => {
                    const isModal = item.modal ? () => showGetInTouch() : undefined;
                    let classes = 'ui-m-2-r ui-md-no-m';

                    return (
                        <Button key={item.name} ghost noease gap={5} to={item.to} data={{ 'close': item.modal }} onClick={isModal} className={classes}>
                            {item.to === '/icons' &&
                                <>
                                I<SvgIcon as='js' src={IconHeart} size='xs' opacity='no' className='love-icons' />
                                </>
                            }
                            {item.name}
                        </Button>
                    )
                })}

            </Button.Wrapper>
        </Item>
    )
}