import React from 'react';
import Avatar from '@ui/Avatar';
import Button from '@ui/Button';
import Card from '@ui/Card';
import Heading from '@ui/Heading';
import Image from '@ui/Image';
import Item from '@ui/Item';
import ListGroup from '@ui/ListGroup';
import SvgIcon from '@ui/SvgIcon';
import Tooltip from '@ui/Tooltip';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { PeopleListProps, PeopleMoreListProps } from '@models/Home_Featured';

// assets
import { IconUserPlus } from '@icon/general/user-plus';
import { IconAngleRight} from '@icon/general/angle-right';

export const People = () => {
    const { themeA, api } = useStoreContext();

    const people = api?.home_featured?.people;
    const peopleList = people?.list;
    const setScrollOuter = peopleList?.length > 3 ? ' ui-scrollbar-outer' : '';

    return (
        <Card className='home-people-list ui-p-15-t ui-p-15-h ui-round ui-shadow'>
            <Tooltip id='peopleTooltip'>{people?.addPeople?.title}</Tooltip>
            <Button ghost square className='ui-round ui-float-r' data={{ 'tooltip': 'l', 'id': 'peopleTooltip', 'only': 'desktop' }}>
                <SvgIcon as='js' src={IconUserPlus} />
            </Button>

            <Heading as='h3' className='ui-align-l ui-m-10-t'>
                {people?.cardTitle}
            </Heading>

            <ListGroup className={`ui-round-t ui-scroll-v ui-scrollbar-round ui-scrollbar-faded${setScrollOuter} ${themeA}`}>
                <ListGroup.List iconSize='sm' avatarSize='xs'>

                    {peopleList.map((item: PeopleListProps) => {
                        const avatarText = item.avatarText;
                        const avatar = item.avatar;
                        const jobTitle = item.jobTitle;

                        let classes = 'ui-squircle ui-hover-scale-more';
                        classes += avatarText ? ' ui-fill-light-300' : '';

                        return (
                            <ListGroup.Item key={jobTitle}>
                                <Button nostyle href={item.url}>
                                    <SvgIcon as='js' src={IconAngleRight} className='ui-listgroup-icon' />
                                    <Avatar size='xs' className={classes}>
                                        {avatar && <Image lazy src={avatar} aspect='square' />}
                                        {avatarText && <Item as='span'>{avatarText}</Item>}
                                    </Avatar>

                                    <Item as='span' className='ui-font-ellipsis ui-block'>{jobTitle}</Item>
                                    <Item as='span' className='ui-color-black-25'>{item.description}</Item>
                                </Button>
                            </ListGroup.Item>
                        )
                    })}

                </ListGroup.List>
            </ListGroup>
        </Card>
    )
}

export const PeopleMore = () => {
    const { themeB, api } = useStoreContext();
    const peopleMore = api?.home_featured?.peopleMore;

    return (
        <Card className={`ui-align-c ui-p-15 ui-round ui-shadow ${themeB}`}>
            <Avatar.Holder ease='2nd' className='ui-m-auto ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>

                {peopleMore?.list.map((item: PeopleMoreListProps) => {
                    const avatarText = item.avatarText;
                    const avatar = item.avatar;
                    const classes = avatarText ? 'ui-fill-dark-100' : undefined;

                    return (
                        <Item as='span' key={item.jobTitle}>
                            <Avatar noease size='sm' className={classes}>
                                {avatar && <Image lazy src={avatar} aspect='square' />}
                                {avatarText && <Item as='span'>{avatarText}</Item>}
                            </Avatar>
                        </Item>
                    )
                })}

                <Item as='span'>
                    <Avatar noease size='sm'>
                        <Button nostyle href={peopleMore?.moreUrl}>
                            <Item as='span'>+{peopleMore?.moreCount}</Item>
                        </Button>
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Card>
    )
}