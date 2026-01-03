import * as React from 'react';
import Button from 'uilab/react/Button';
import Heading from 'uilab/react/Heading';

export default function () {
    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <Heading as='h1' className='ui-font-72'>
                500
            </Heading>
            <p className="ui-m-30-b">Server error</p>
            <Button className='ui-circle' to='/'>Go to Home</Button>
        </div>
    );
}