import * as React from 'react';
import Button from 'uilab/react/Button';

export default function () {
    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <h1 className='ui-h1 ui-font-72'>500</h1>
            <p className="ui-m-30-b">Server error</p>
            <Button className='ui-circle' to='/'>Go to Home</Button>
        </div>
    );
}