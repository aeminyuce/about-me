import React from 'react';
import Button from 'uilab/react/Button';
import Calendar from 'uilab/react/Calendar';
import Card from 'uilab/react/Card';
import Dropdown from 'uilab/react/Dropdown';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';
import Tooltip from 'uilab/react/Tooltip';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function() {
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