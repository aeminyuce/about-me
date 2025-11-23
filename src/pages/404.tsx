import * as React from 'react';
import Button from 'uilab/react/Button';
import Spacer from 'uilab/react/Spacer';

export default function () {
    return (
        <div className='ui-align-c ui-set-absolute ui-set-c'>
            <h1>404</h1>
            Page not found
            <Spacer size={15} />
            <Button className='ui-circle' to='/'>Home</Button>
        </div>
    );
}