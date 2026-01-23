import * as React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Card from 'uilab/react/Card';
import Listing from 'uilab/react/Listing';

// misc
import { useStoreContext } from '../../states/StoreContext';
import type { LabMenuProps } from '../../models/Lab';
import { scrollToHash } from '../../helpers/Lab';

export default function() {
    const { pathname, hash } = useLocation();

    const { apiResponse } = useStoreContext();
    const menu = apiResponse?.lab?.menu;

    return (
        <Card className='ui-color-black-50 ui-p-15 ui-round ui-shadow ui-set-sticky ui-hidden-md'>
            <nav aria-label='Lab page navigation'>
                <Listing type='unstyled' space={15} className='lab-menu ui-font-hoverline-2nd ui-theme-yellowOrange ui-sidebar-add-r'>

                    {menu.map((item: LabMenuProps) => {
                        const classes = 'ui-link';

                        const url = `/lab/${item.to}`;
                        const selected = `${pathname.startsWith(url) ? ' ui-text' : ''}`;

                        return (
                            <Listing.Item key={item.to}>
                                <Link to={url} className={classes + selected}>{item.name}</Link><br />

                                {item?.titles?.map((title: string) => {
                                    const titleSelected = `${hash === '#' + title ? ' ui-text' : ' ui-color-black'}`;

                                    return (
                                        <Fragment key={title}>
                                            {selected &&
                                                <>
                                                <Link to={`${url}#${title}`} className={classes + titleSelected} onClick={() => scrollToHash(title)}>
                                                    {title}
                                                </Link>
                                                <br />
                                                </>
                                            }
                                        </Fragment>
                                    )
                                })}

                            </Listing.Item>
                        )
                    })}

                </Listing>
            </nav>
        </Card>
    )
}