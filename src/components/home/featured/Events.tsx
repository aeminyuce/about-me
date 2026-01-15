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

    return (
        <Card className='ui-p-15 ui-round ui-shadow'>
            {calendar?.settings &&
                <Dropdown align='l' className='ui-float-r'>
                    <Button square ghost title={calendar?.title} className='ui-round' data={{ 'tooltip': '', 'only': 'desktop' }}>
                        <SvgIcon as='js' src={IconEllipsisH} />
                    </Button>
                    <Dropdown.Menu className='ui-color-black ui-inline-block-2nd ui-round ui-shadow-lg ui-cursor-pointer'>

                        {calendar?.settings.map((name: string, index: number) => (
                            <Dropdown.Item key={name + index}>{name}</Dropdown.Item>
                        ))}

                    </Dropdown.Menu>
                </Dropdown>
            }

            {calendar?.cardTitle &&
                <Heading as='h3' className='ui-align-l ui-m-10-t'>
                    {calendar?.cardTitle}
                </Heading>
            }

            {calendar?.eventsDate && calendar?.events &&
                <Calendar
                    className='ui-no-p ui-round'
                    data={{ date: calendar?.eventsDate, json: JSON.stringify(calendar?.events) }}
                />
            }
        </Card>
    )
}