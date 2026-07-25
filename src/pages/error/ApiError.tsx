import React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';

export default function () {
    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <Heading as='h1' className='ui-font-72'>
                API Error
            </Heading>
            <p className='ui-font-22 ui-m-30-b'>Whoops, the API paused or didn’t respond. We’ll be back soon.</p>
            <Button className='ui-circle' onClick={() => window.history.back()}>Try Again</Button>
        </div>
    )
}