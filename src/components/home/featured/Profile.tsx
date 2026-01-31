import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import ListGroup from 'uilab/react/ListGroup';
import Notifier from 'uilab/react/Notifier';

// misc
import { useStoreContext } from '../../../states/StoreContext';
import type { UserActivityProps } from '../../../models/Home_Featured';
import GetImage from '../../common/GetImage';

export default function() {
    const { api } = useStoreContext();

    const profile = api?.home_featured?.profile;
    const info = profile?.info;
    const userActivity = profile?.userActivity;

    const email = info?.email;
    const type = info?.type;

    return (
        <Card className='home-profile ui-round ui-shadow'>
            {info?.avatar &&
                <div className='ui-align-c ui-round-t ui-border-b ui-stroke ui-fill-light-100'>
                    <Notifier className='ui-circle ui-circle-1st' dataVal={'Idle'}>
                        <Avatar size='lg'>
                            <GetImage src={info?.avatar} />
                        </Avatar>
                    </Notifier>
                </div>
            }

            <div className='ui-align-c'>
                {info?.name}
                {email &&
                    <div className='ui-color-black-50 ui-font-11 ui-m-10-b'>
                        {email}
                    </div>
                }
                {type &&
                    <div className='ui-font-11 ui-m-10-b'>
                        <Button as='span' size='xs' className='ui-p-10-h ui-circle ui-fill-dark-100'>
                            {type}
                        </Button>
                    </div>
                }
            </div>

            <ListGroup className={`ui-scroll-v ui-scrollbar-round ui-scrollbar-faded`}>
                <ListGroup.List avatarSize='xs'>

                    {userActivity?.map((item: UserActivityProps, index: number) => (
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