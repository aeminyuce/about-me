import * as React from 'react';
import Button from 'uilab/react/Button';
import Code from 'uilab/react/Code';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import { ui } from 'uilab/js/core/globals';

export default function () {
    return (
        <>
        <Heading as='h1'>Alerts</Heading>

        <Heading as='h3'>Showing Dialogues</Heading>
        <Code className='ui-round'>
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
        </form>
        </>
    );
}
