import * as React from 'react';
import { Fragment } from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import ListGroup from 'uilab/react/ListGroup';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../states/StoreContext';
import type { PeopleListProps, PeopleMoreListProps } from '../../models/Home';

// assets
import { IconUserPlus } from 'uilab-icons/react/general/user-plus';
import { IconAngleRight} from 'uilab-icons/react/general/angle-right';

export const People = () => {
    const { apiResponse } = useStoreContext();
    const people = apiResponse?.home?.people;

    const peopleList = people?.list;
    const addPeople = people?.addPeople;
    const cardTitle = people?.cardTitle;

    const peopleIcons = {
        "user-plus": IconUserPlus,
    };

    const setScrollOuter = peopleList?.length > 3 ? ' ui-scrollbar-outer' : '';

    return (
        <Card className='home-people-list ui-p-15 ui-round'>
            {addPeople &&
                <Button ghost square title={addPeople?.title} className='ui-round ui-float-r' data={{ 'tooltip': '', 'only': 'desktop' }}>
                    {addPeople?.icon &&
                        <SvgIcon as='js' src={peopleIcons[addPeople?.icon]} />
                    }
                </Button>
            }

            {cardTitle &&
                <h3 className='ui-h3 ui-align-l ui-m-10-t'>{cardTitle}</h3>
            }

            <ListGroup className={`ui-round ui-scroll-v ui-scrollbar-faded${setScrollOuter}`}>
                <ListGroup.List avatarSize='xs'>

                    {peopleList?.map((item: PeopleListProps) => (
                        <ListGroup.Item key={item.jobTitle}>
                            <a href={item.url}>
                                <SvgIcon as='js' src={IconAngleRight} className='ui-listgroup-icon' />
                                {(item.avatar || item.avatarText) &&
                                    <Avatar size='xs' className='ui-circle ui-fill-dark-100 ui-hover-scale-more'>
                                        {item.avatar && <img src={item.avatar} />}
                                        {item.avatarText && <span>{item.avatarText}</span>}
                                    </Avatar>
                                }

                                <span className='ui-font-ellipsis ui-block'>{item.jobTitle}</span>
                                <span className='ui-color-black-25'>{item.description}</span>
                            </a>
                        </ListGroup.Item>
                    ))}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}

export const PeopleMore = () => {
    const { apiResponse } = useStoreContext();
    const peopleMore = apiResponse?.home?.peopleMore;

    const moreBtnText = peopleMore?.moreBtnText;
    const moreCount = peopleMore?.moreCount;

    return (
        <Card className='ui-p-15 ui-round'>
            {moreBtnText &&
                <Button to={peopleMore?.moreUrl} className='ui-p-20-h ui-m-4-v ui-float-r ui-circle ui-fill-dark-100'>
                    {moreBtnText}
                </Button>
            }

            <Avatar.Holder className='ui-m-auto ui-circle-1st ui-ease-1st-layout'>

                {peopleMore?.list.map((item: PeopleMoreListProps) => (
                    <Fragment key={item.jobTitle}>
                        {(item.avatar || item.avatarText) &&
                            <Avatar noease className='ui-hover-scale-more'>
                                {item.avatar && <img src={item.avatar} />}
                                {item.avatarText && <span>{item.avatarText}</span>}
                            </Avatar>
                        }
                    </Fragment>
                ))}

                {moreCount &&
                    <span className='ui-m-10-h ui-inline-block'>
                        +{moreCount}
                    </span>
                }
            </Avatar.Holder>
        </Card>
    )
}