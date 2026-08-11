import React from 'react';
import { useRouteError } from 'react-router';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Item from '@ui/Item';

export default function () {
    // throwing errors only inside react router components, not services
    const error = useRouteError();

    return (
        <Item as='div' className='ui-align-c ui-set-absolute ui-set-c'>
            <Heading as='h1' className='ui-font-72'>
                Oops!
            </Heading>
            <Item as='p' className='ui-font-22 ui-m-30-b'>{String(error)}</Item>
            <Button className='ui-circle' onClick={() => window.location.reload()}>Refresh</Button>
        </Item>
    )
}