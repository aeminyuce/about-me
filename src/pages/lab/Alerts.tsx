import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Heading from 'uilab/react/Heading';

// misc
import Preview from '../../components/common/Preview';

export default function () {
    return (
        <>
        <Heading as='h1'>Alerts</Heading>

        <Heading as='h3'>Dialog Messages</Heading>
        <p>Simple dialog with green success button inside gray footer.</p>
        <Preview
            code={`Alerts.Dialog({\n    msg: 'Simple dialog message.',\n});`}
            onClick={() => {
                Alerts.Dialog({
                    msg: 'Simple dialog message.',
                });
            }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-static'
                style={{ width: 'clamp(280px, 50%, 420px)', transform: 'none' }}>
                <div className='ui-dialog-msg'>Simple dialog message.</div>
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-success' value='success'>OK</button>
                </div>
            </div>
        </Preview>

        <p>Simple dialog with success button text.</p>
        <Preview
            code={`Alerts.Dialog({\n    msg: 'With custom success button text.',\n    success: 'Got it!',\n});`}
            onClick={() => {
                Alerts.Dialog({
                    msg: 'Simple dialog message.',
                    success: 'Got it!',
                });
            }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-static'
                style={{ width: 'clamp(280px, 50%, 420px)', transform: 'none' }}>
                <div className='ui-dialog-msg'>With custom success button text.</div>
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-success' value='success'>Got it!</button>
                </div>
            </div>
        </Preview>
        </>
    );
}
