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
    const { pathname } = useLocation();

    const { apiResponse } = useStoreContext();
    const menu = apiResponse?.lab?.menu;

    return (
        <Card className='lab-menu ui-color-black-50 ui-p-15 ui-round ui-shadow ui-set-sticky ui-hidden-md ui-theme-yellowOrange'>
            <Listing type='unstyled' space={15} className='ui-font-hoverline-2nd ui-sidebar-add-r'>

                {menu.map((item: LabMenuProps) => {
                    const url = `/lab/${item.to}`;
                    const selected = pathname.startsWith(url);

                    const classes = `$ui-link ${selected ? ' ui-text' : ''}`;
                    const titleClasses = 'ui-link ui-color-white';

                    return (
                        <Listing.Item key={item.to}>
                            <Link to={url} className={classes}>{item.name}</Link><br />
                            {item?.titles?.map((title: string) => (
                                <Fragment key={title}>
                                    {selected &&
                                        <>
                                        <Link to={`${url}#${title}`} className={titleClasses} onClick={() => scrollToHash(title)}>
                                            {title}
                                        </Link>
                                        <br />
                                        </>
                                    }
                                </Fragment>
                            ))}
                        </Listing.Item>
                    )
                })}

            </Listing>
        </Card>
    )
}