import * as React from 'react';
import { useRouteError } from 'react-router';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';

export default function () {
    // throwing errors only inside react router components, not services
    const error = useRouteError();

    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <Heading as='h1' className='ui-font-72'>
                Oops!
            </Heading>
            <p className='ui-font-22 ui-m-30-b'>{String(error)}</p>
            <Button className='ui-circle' to='/'>Go to Home</Button>
        </div>
    )
}