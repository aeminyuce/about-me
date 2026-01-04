import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Card from 'uilab/react/Card';
import Listing from 'uilab/react/Listing';

// misc
import { useStoreContext } from '../../states/StoreContext';
import type { LabMenuProps } from '../../models/Lab';

export default function() {
    const { pathname } = useLocation();
    const { apiResponse } = useStoreContext();

    const menu = apiResponse?.lab?.menu;

    return (
        <Card className='lab-menu ui-p-15 ui-round ui-shadow-sm ui-set-sticky ui-hidden-md'>
            <Listing type='unstyled' space={15} className='ui-font-hoverline-2nd ui-sidebar-add-r'>

                {menu.map((item: LabMenuProps) => {
                    const selected = item.to === pathname;
                    const classes = `ui-link${selected ? ' ui-font-bold' : ''}`;

                    return (
                        <Listing.Item key={item.name}>
                            <Link to={item.to} className={classes}>{item.name}</Link>
                        </Listing.Item>
                    )
                })}

            </Listing>
        </Card>
    )
}