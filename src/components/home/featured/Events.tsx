import * as React from 'react';
import Button from 'uilab/react/Button';
import Calendar from 'uilab/react/Calendar';
import Card from 'uilab/react/Card';
import Dropdown from 'uilab/react/Dropdown';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../states/StoreContext';

// assets
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function() {
    const { apiResponse } = useStoreContext();

    const calendar = apiResponse?.home_featured?.calendar;
    const settings = calendar?.settings;
    const cardTitle = calendar?.cardTitle;
    const calendarEvents = calendar?.eventsDate;
    const events = calendar?.events;

    return (
        <Card className='ui-p-15 ui-round ui-shadow'>
            {settings &&
                <Dropdown align='l' className='ui-float-r'>
                    <Button square ghost title={calendar?.title} className='ui-round' data={{ 'tooltip': 'l', 'only': 'desktop' }}>
                        <SvgIcon as='js' src={IconEllipsisH} />
                    </Button>
                    <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>

                        {settings.map((name: string, index: number) => (
                            <Dropdown.Item key={name + index}>{name}</Dropdown.Item>
                        ))}

                    </Dropdown.Menu>
                </Dropdown>
            }

            {cardTitle &&
                <Heading as='h3' className='ui-align-l ui-m-10-t'>
                    {cardTitle}
                </Heading>
            }

            {calendarEvents && events &&
                <Calendar
                    className='ui-no-p ui-round'
                    data={{ date: calendarEvents, json: JSON.stringify(events) }}
                />
            }
        </Card>
    )
}