import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Card from 'uilab/react/Card';
import ListGroup from 'uilab/react/ListGroup';
import Notifier from 'uilab/react/Notifier';

// misc
import { useStoreContext } from '../../states/StoreContext';
import type { UserActivityProps } from '../../models/Home';

export const Profile = () => {
    const { apiResponse } = useStoreContext();
    const profile = apiResponse?.home?.profile;

    const info = profile?.info;
    const userActivity = profile?.userActivity;

    return (
        <Card className='home-profile ui-round ui-shadow-sm'>
            {info?.avatar &&
                <div className='ui-align-c ui-round-t ui-fill-dark-100'>
                    <Notifier className='ui-circle ui-circle-1st' dataVal={'Idle'}>
                        <Avatar size='lg'>
                            <span>{info?.avatar}</span>
                        </Avatar>
                    </Notifier>
                </div>
            }

            <div className='ui-align-c'>
                {info?.name || ''}
                {info?.email &&
                    <div className='ui-color-black-50 ui-font-11 ui-m-15-b'>
                        {info?.email}
                    </div>
                }
                {info?.type &&
                    <div className='ui-font-11 ui-m-15-b ui-1st-inline-block'>
                        <span className='ui-p-5-h ui-p-2-h ui-round-inner ui-fill-dark-100'>
                            {info?.type}
                        </span>
                    </div>
                }
            </div>

            <ListGroup className={`ui-round ui-scroll-v ui-scrollbar-faded`}>
                <ListGroup.List avatarSize='xs'>

                    {userActivity?.map((item: UserActivityProps) => (
                        <ListGroup.Item key={`uac-${item.id}`}>
                            <a href={item.url}>
                                <Avatar size='xs' className='ui-round'>
                                    <span>{item.time}</span>
                                </Avatar>
                                <span className='ui-color-black-50 ui-font-13 ui-font-condensed ui-p-5-t ui-block'>
                                    {item.activity}
                                </span>
                            </a>
                        </ListGroup.Item>
                    ))}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}