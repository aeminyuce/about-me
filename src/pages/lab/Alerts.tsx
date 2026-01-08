import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Button from 'uilab/react/Button';
import Code from 'uilab/react/Code';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';

export default function () {
    return (
        <>
        <Heading as='h1'>Alerts</Heading>

        <Heading as='h3'>Dialog Messages</Heading>
        <div className='ui-highlight ui-p-30 ui-md-no-p-h ui-round ui-border ui-border-light'>
            <Grid.Row fluid='lg'>
                <Grid.Col size={6}>

                    <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-30-t ui-m-auto ui-set-static'
                        style={{ width: '65%', transform: 'none' }}>
                        <div className='ui-dialog-msg'>Simple dialog message.</div>
                        <div className='ui-dialog-buttons ui-ease-1st-btn'>
                            <button className='ui-dialog-success' value='success'>OK</button>
                        </div>
                    </div>

                    <Spacer size={30} className='ui-m-20-v' />

                    <Code clipboard className='ui-m-5-b ui-m-10-t ui-m-15-h ui-round'>
                        <Code.Comment>JS</Code.Comment>
                        <Code.Lines>
{`Alerts.Dialog({
    msg: 'Simple dialog message.',
});`}
                        </Code.Lines>
                    </Code>
                    <Button size='sm' className='ui-m-15-l ui-round ui-theme-blue ui-fill-dark-100'
                        onClick={() => {
                            Alerts.Dialog({
                                msg: 'Simple dialog message.',
                            });
                        }}>
                        Run Code
                    </Button>

                </Grid.Col>
                <Grid.Col size={6}>

                    <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-30-t ui-m-auto ui-set-static'
                        style={{ width: '65%', transform: 'none' }}>
                        <div className='ui-dialog-msg'>With custom success button text.</div>
                        <div className='ui-dialog-buttons ui-ease-1st-btn'>
                            <button className='ui-dialog-success' value='success'>Got it!</button>
                        </div>
                    </div>

                    <Spacer size={30} className='ui-m-20-v' />

                    <Code clipboard className='ui-m-5-b ui-m-10-t ui-m-15-h ui-round'>
                        <Code.Comment>JS</Code.Comment>
                        <Code.Lines>
{`Alerts.Dialog({
    msg: 'With custom success button text.',
    success: 'Got it!',
});`}
                        </Code.Lines>
                    </Code>
                    <Button size='sm' className='ui-m-15-l ui-round ui-theme-blue ui-fill-dark-100'
                        onClick={() => {
                            Alerts.Dialog({
                                msg: 'With custom success button text.',
                                success: 'Got it!',
                            });
                        }}>
                        Run Code
                    </Button>

                </Grid.Col>
            </Grid.Row>
        </div>

        {/* <Code className='ui-round'>
            <Code.Comment>Usage</Code.Comment>
            <Code.Lines>
                {`ui.alerts.dialog({ msg: '', success: '', error: '', custom: { value: 'button text', value: 'button text' }, callback });`}
            </Code.Lines>
        </Code>

        <div className='ui-highlight ui-p-15 ui-round ui-border ui-border-light'>
            <Grid.Row as='dl' fluid='xs'>
                <Grid.Col as='dt' size={3}>
                    msg
                </Grid.Col>
                <Grid.Col as='dd' size={9}>
                    Required. Your dialog example...<br />
                    success<br />
                    Optional. Set success button text.<br />
                    Success button returns a value: <Code.Mini str={`'success'`} />
                </Grid.Col>

                <Grid.Col as='dt' size={3}>
                    error
                </Grid.Col>
                <Grid.Col as='dd' size={9}>
                    Optional. Set error button text.<br />
                    Error button returns a value: <Code.Mini str={`'error'`} />
                </Grid.Col>

                <Grid.Col as='dt' size={3}>
                    custom
                </Grid.Col>
                <Grid.Col as='dd' size={9}>
                    Optional. Set custom buttons.<br />
                    Custom buttons returns defined own value.<br />
                    Example usage: <Code.Mini str={`{value: 'button text', value: 'button text'}`} />
                </Grid.Col>

                <Grid.Col as='dt' size={3}>
                    callback
                </Grid.Col>
                <Grid.Col as='dd' size={9}>
                    Optional. Set a callback function when dialog returns a value.<br />
                    Example usage: <Code.Mini str={`function (value) {}`} />
                </Grid.Col>
            </Grid.Row>
        </div>

        <Heading as='h4'>Submit form example:</Heading>
        <Code clipboard className='ui-round'>
            <Code.Comment>JS</Code.Comment>
            <Code.Lines>
{`onSubmit={(e) => {
    e.preventDefault();
    return ui.alerts.dialog({
        msg: 'Submit this form?',
        success: 'Yes',
        error: 'No',
        callback: function(value: string) {
            if (value === 'success') {
                const form = e.target as HTMLFormElement;
                form?.submit();
            }
        }
    });
}}`}
            </Code.Lines>
        </Code>
        <form action='#succesful'
            onSubmit={(e) => {
                e.preventDefault();
                return ui.alerts.dialog({
                    msg: 'Submit this form?',
                    success: 'Yes',
                    error: 'No',
                    callback: function(value: string) {
                        if (value === 'success') {
                            const form = e.target as HTMLFormElement;
                            form?.submit();
                        }
                    }
                });
            }}>
            <Button type='submit' className='ui-round ui-theme-blue ui-fill-dark-100'>
                Submit Form
            </Button>
        </form> */}
        </>
    );
}
