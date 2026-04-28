import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import ListGroup from 'uilab/react/ListGroup';
import Notifier from 'uilab/react/Notifier';

// misc
import { useStoreContext } from '../../../stores/StoreContext';
import type { UserActivityProps } from '../../../models/Home_Featured';
import GetImage from '../../common/GetImage';

export default function() {
    const { themeA, api } = useStoreContext();

    const profile = api?.home_featured?.profile;
    const info = profile?.info;

    return (
        <Card className='home-profile ui-round ui-shadow'>
            <div className='ui-align-c ui-round-t ui-border-b'>
                <div className='ui-round-t'>
                    <GetImage lazy src={info?.cover} aspect='photo' />
                </div>
                <Notifier className='ui-circle ui-circle-1st' dataVal={'Idle'}>
                    <Avatar size='lg'>
                        <GetImage lazy src={info?.avatar} aspect='square' />
                    </Avatar>
                </Notifier>
            </div>

            <div className='ui-align-c'>
                {info?.name}
                <div className='ui-color-black-50 ui-font-11 ui-m-10-b'>
                    {info?.email}
                </div>
                <div className='ui-font-11 ui-m-10-b'>
                    <Button as='span' size='xs' className={`ui-p-10-h ui-circle ui-fill-light-200 ${themeA}`}>
                        {info?.type}
                    </Button>
                </div>
            </div>

            <ListGroup className={`ui-scroll-v ui-round-b ui-scrollbar-round ui-scrollbar-faded`}>
                <ListGroup.List avatarSize='xs'>

                    {profile?.userActivity?.map((item: UserActivityProps, index: number) => (
                        <ListGroup.Item key={`uac-${index}`}>
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