import Avatar from '@ui/Avatar';
import Button from '@ui/Button';
import Box from '@ui/Box';
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

    return (
        <Card className='home-people-list ui-p-15-t ui-p-15-h ui-round ui-shadow'>
            <Box as='div' className='ui-p-10-b'>
                <Heading as='h3' className='ui-no-m-b'>
                    {people?.cardTitle}
                </Heading>

                <Tooltip id='peopleTooltip'>{people?.addPeople?.title}</Tooltip>
                <Button ghost square alignSelf='r' className='ui-round' data={{ 'tooltip': 'l', 'id': 'peopleTooltip', 'only': 'desktop' }}>
                    <SvgIcon as='js' src={IconUserPlus} />
                </Button>
            </Box>

            <ListGroup noScrollBg className={`ui-round-t ${themeA}`}>
                <ListGroup.List iconSize='sm' avatarSize='xs'>

                    {peopleList.map((item: PeopleListProps) => {
                        const avatarText = item.avatarText;
                        const avatar = item.avatar;
                        const jobTitle = item.jobTitle;

                        return (
                            <ListGroup.Item key={jobTitle}>
                                <Button nostyle href={item.url}>
                                    {avatar &&
                                        <Avatar size='xs' className='ui-hover-scale-more'>
                                            <Image lazy src={avatar} aspect='square' className='ui-squircle' />
                                        </Avatar>
                                    }

                                    {avatarText &&
                                        <Avatar size='xs' className='ui-hover-scale-more ui-squircle ui-fill-light-300'>
                                            {avatarText}
                                        </Avatar>
                                    }

                                    <Item as='span' className='ui-font-ellipsis ui-m-3-v ui-block'>{jobTitle}</Item>
                                    <Item as='span' className='ui-color-black-25'>{item.description}</Item>

                                    <SvgIcon as='js' src={IconAngleRight} className='ui-listgroup-icon' />
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
        <Card className={`ui-items-c ui-p-15 ui-round ui-shadow ${themeB}`}>
            <Avatar.Holder ease='2nd' className='ui-item-c ui-hover-scale-more-2nd ui-squircle-2nd ui-hover-shadow-2nd'>

                {peopleMore?.list.map((item: PeopleMoreListProps) => {
                    const avatarText = item.avatarText;
                    const avatar = item.avatar;

                    if (avatar) return (
                        <Avatar key={item.jobTitle} noease size='sm' >
                            <Image lazy src={avatar} aspect='square' />
                        </Avatar>
                    )

                    if (avatarText) return (
                         <Item as='span' key={item.jobTitle}>
                            <Avatar noease size='sm' className='ui-fill-dark-100'>
                                {avatarText}
                            </Avatar>
                        </Item>
                    )
                })}

                <Item as='span'>
                    <Avatar noease size='sm'>
                        <Button nostyle href={peopleMore?.moreUrl}>
                            +{peopleMore?.moreCount}
                        </Button>
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Card>
    )
}