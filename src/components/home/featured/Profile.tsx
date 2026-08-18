import React from 'react';
import Avatar from '@ui/Avatar';
import Button from '@ui/Button';
import Card from '@ui/Card';
import Image from '@ui/Image';
import Item from '@ui/Item';
import ListGroup from '@ui/ListGroup';
import Notifier from '@ui/Notifier';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { UserActivityProps } from '@models/Home_Featured';

export default function () {
    const { themeA, api } = useStoreContext();

    const profile = api?.home_featured?.profile;
    const info = profile?.info;

    return (
        <Card className={`home-profile ui-round ui-shadow ${themeA}`}>
            <Item as='div' className='ui-align-c ui-round-t ui-border-b'>
                <Item as='div' className='ui-round-t'>
                    <Image lazy src={info?.cover} aspect='photo' />
                </Item>
                <Notifier dataVal='Idle'>
                    <Avatar className='ui-squircle'>
                        <Image lazy src={info?.avatar} aspect='square' />
                    </Avatar>
                </Notifier>
            </Item>

            <Item as='div' className='ui-align-c'>
                {info?.name}
                <Item as='div' className='ui-color-black-50 ui-font-11 ui-m-10-b'>
                    {info?.email}
                </Item>
                <Item as='div' className='ui-font-11 ui-m-10-b'>
                    <Button as='span' size='xs' className='ui-p-10-h ui-circle ui-fill-dark-100'>
                        {info?.type}
                    </Button>
                </Item>
            </Item>

            <ListGroup className={`ui-scroll-v ui-round-b ui-scrollbar-round ui-scrollbar-faded`}>
                <ListGroup.List avatarSize='xs'>

                    {profile?.userActivity?.map((item: UserActivityProps, index: number) => (
                        <ListGroup.Item key={`uac-${index}`}>
                            <Avatar size='xs' className='ui-round ui-fill-light-300'>
                                <Item as='span'>{item.time}</Item>
                            </Avatar>
                            <Item as='span' className='ui-color-black-50 ui-font-13 ui-font-condensed ui-p-5-t ui-block'>
                                {item.activity}
                            </Item>
                        </ListGroup.Item>
                    ))}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}