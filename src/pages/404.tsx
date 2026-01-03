import * as React from 'react';
import Button from 'uilab/react/Button';

export default function () {
    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <h1 className='ui-h1 ui-font-72'>404</h1>
            <p className='ui-m-30-b'>Page not found</p>
            <Button className='ui-circle' to='/'>Go to Home</Button>
        </div>
    );
}