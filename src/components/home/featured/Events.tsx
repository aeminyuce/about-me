import React from 'react';
import Button from '@ui/Button';
import Calendar from '@ui/Calendar';
import Card from '@ui/Card';
import Dropdown from '@ui/Dropdown';
import Heading from '@ui/Heading';
import SvgIcon from '@ui/SvgIcon';
import Tooltip from '@ui/Tooltip';

// misc
import { useStoreContext } from '@stores/StoreContext';

// assets
import { IconEllipsisH } from '@icon/general/ellipsis-h';

export default function () {
    const { themeB, api } = useStoreContext();
    const calendar = api?.home_featured?.calendar;

    return (
        <Card className='ui-p-15 ui-round ui-shadow'>
            <Dropdown align='l' className='ui-float-r ui-round-1st'>
                <Tooltip id='eventsTooltip'>{calendar?.title}</Tooltip>
                <Button square ghost data={{ 'tooltip': 'l', 'id': 'eventsTooltip', 'only': 'desktop' }}>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>

                <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-shadow-lg ui-cursor-pointer'>

                    {calendar?.settings?.map((name: string, index: number) => (
                        <Dropdown.Item key={name + index}>{name}</Dropdown.Item>
                    ))}

                </Dropdown.Menu>
            </Dropdown>

            <Heading as='h3' className='ui-align-l ui-m-10-t'>
                {calendar?.cardTitle}
            </Heading>

            <Calendar className={`ui-no-p ui-round ${themeB}`} data={{ date: calendar?.eventsDate }} json={calendar?.events} />
        </Card>
    )
}