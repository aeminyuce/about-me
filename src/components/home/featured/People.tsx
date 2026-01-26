import * as React from 'react';
import { Fragment } from 'react';
import Avatar from 'uilab/react/Avatar';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Heading from 'uilab/react/Heading';
import ListGroup from 'uilab/react/ListGroup';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../states/StoreContext';
import type { PeopleListProps, PeopleMoreListProps } from '../../../models/Home_Featured';

// assets
import { IconUserPlus } from 'uilab-icons/react/general/user-plus';
import { IconAngleRight} from 'uilab-icons/react/general/angle-right';

export const People = () => {
    const { api } = useStoreContext();
    const people = api?.home_featured?.people;

    const peopleList = people?.list;
    const addPeople = people?.addPeople;
    const cardTitle = people?.cardTitle;

    const peopleIcons = {
        "user-plus": IconUserPlus,
    };

    const setScrollOuter = peopleList?.length > 3 ? ' ui-scrollbar-outer' : '';

    return (
        <Card className='home-people-list ui-p-15-t ui-p-15-h ui-round ui-shadow'>
            {addPeople &&
                <Button ghost square title={addPeople?.title} className='ui-round ui-float-r' data={{ 'tooltip': 'l', 'only': 'desktop' }}>
                    {addPeople?.icon &&
                        <SvgIcon as='js' src={peopleIcons[addPeople?.icon]} />
                    }
                </Button>
            }

            {cardTitle &&
                <Heading as='h3' className='ui-align-l ui-m-10-t'>
                    {cardTitle}
                </Heading>
            }

            <ListGroup className={`ui-round-t ui-scroll-v ui-scrollbar-round ui-scrollbar-faded${setScrollOuter}`}>
                <ListGroup.List avatarSize='xs'>

                    {peopleList.map((item: PeopleListProps) => {
                        const avatarText = item.avatarText;
                        const avatar = item.avatar;
                        const jobTitle = item.jobTitle;

                        let classes = 'ui-circle ui-hover-scale-more';
                        classes += avatarText ? ' ui-fill-dark-100' : '';

                        return (
                            <ListGroup.Item key={jobTitle}>
                                <a href={item.url}>
                                    <SvgIcon as='js' src={IconAngleRight} className='ui-listgroup-icon' />
                                    {(avatar && avatarText) &&
                                        <Avatar size='xs' className={classes}>
                                            <img src={`/images/${avatar}`} />
                                            <span>{avatarText}</span>
                                        </Avatar>
                                    }

                                    <span className='ui-font-ellipsis ui-block'>{jobTitle}</span>
                                    <span className='ui-color-black-25'>{item.description}</span>
                                </a>
                            </ListGroup.Item>
                        )
                    })}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}

export const PeopleMore = () => {
    const { api } = useStoreContext();

    const peopleMore = api?.home_featured?.peopleMore;
    const moreCount = peopleMore?.moreCount;

    return (
        <Card className='ui-align-c ui-p-15 ui-round ui-shadow'>
            <Avatar.Holder className='ui-m-auto ui-circle-1st ui-ease-1st-layout ui-hover-scale-more-1st'>

                {peopleMore?.list.map((item: PeopleMoreListProps) => {
                    const avatarText = item.avatarText;
                    const avatar = item.avatar;

                    const  classes = avatarText ? 'ui-fill-dark-100' : null;

                    return (
                        <Fragment key={item.jobTitle}>
                            {(avatar && avatarText) &&
                                <Avatar noease size='xs' className={classes}>
                                    <img src={`/images/${avatar}`} />
                                    <span>{avatarText}</span>
                                </Avatar>
                            }
                        </Fragment>
                    )
                })}

                {moreCount &&
                    <Avatar noease size='xs'>
                        <a href={peopleMore?.moreUrl}>
                            <span>+{moreCount}</span>
                        </a>
                    </Avatar>
                }
            </Avatar.Holder>
        </Card>
    )
}