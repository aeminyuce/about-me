import * as React from 'react';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { ThemeListProps } from '../../models/Home';
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';

export default function () {
    const { theme, setTheme, api } = useStoreContext();
    const themeList = api?.home?.nav?.themeList;

    return (
        <Dropdown align='l'>
            <Button ghost className='ui-round ui-p-10-h'>
                <span className={`ui-inline-block ui-circle ${theme} ui-fill-dark-100`} />
                <SvgIcon as='js' toggle src={IconAngleDown} className='ui-m-10-l' />
            </Button>
            <Dropdown.Menu className='ui-inline-block-2nd ui-round ui-circle-2nd ui-shadow-lg ui-cursor-pointer'>

                {themeList.map((item: ThemeListProps) => (
                    <Dropdown.Item key={item.name} onClick={() => setTheme(item.theme)}>
                        <span className={`ui-m-10-r ${item.theme} ui-fill-dark-100`} />
                        {item.name}
                    </Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>
    )
}
