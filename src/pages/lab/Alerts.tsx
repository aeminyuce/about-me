import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Preview from '../../components/common/Preview';

// assets
import { IconRemove } from 'uilab-icons/react/general/remove';

export default function () {
    return (
        <>
        <Breadcrumbs className='ui-p-10-b ui-m-30-b ui-border-b ui-border-light ui-hover-opacity-2nd'>
            <Breadcrumbs.Item to='/'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item to='/lab'>Lab</Breadcrumbs.Item>
        </Breadcrumbs>

        <Heading as='h1'>Alerts</Heading>
        <Heading as='h3'>Dialog Windows</Heading>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    A simple dialog includes a single button in a gray footer. It cannot be closed by clicking outside the window, it can only be closed by clicking the button. When the dialog opens, the button is focused by default.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Dialog({
                msg: 'I am simple.',
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 320px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <div className='ui-dialog-msg'>I am simple.</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Okay</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    This dialog includes single button along with custom text.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Dialog({
                msg: 'Everything will be OK.',
                success: 'Got it!',
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 320px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <div className='ui-dialog-msg'>Everything will be OK.</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Got it!</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    This dialog includes success and error buttons with custom text. This dialog can be closed by clicking outside the dialog window, and it also includes a close button in the top‑right corner. Additionally, this dialog can be closed using the ESC key on the keyboard. When a dialog contains an error button, the error button is focused first when the dialog opens.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Dialog({
                msg: 'Are you sure you want to remove from your list?',
                success: 'Yes, delete.',
                error: 'Noooo!',
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 450px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>Are you sure you want to remove from your list?</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Yes, delete.</button>
                        <button className='ui-dialog-error' value='error'>Noooo!</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    This dialog includes success, error, and custom buttons along with custom text.  Custom buttons are displayed separately at the top. When all button types are placed in the footer, and when the dialog opens, the error button is focused first.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Dialog({
                msg: 'Are you sure you want to donwload your backup files?',
                success: 'Yes',
                error: 'No',
                custom: {
                    first: 'I don\'t care.',
                    second: 'Remind me later.',
                }
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 480px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>Are you sure you want to donwload your backup files?</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <button className='ui-dialog-custom' value='0'>I don't care.</button>
                    <button className='ui-dialog-custom' value='1'>Remin me later!</button>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Yes</button>
                        <button className='ui-dialog-error' value='error'>No</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    This dialog runs a callback function when the success or error button is clicked. In this example, it displays an alert showing which option you selected.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Dialog({
                msg: 'Can you alert my response?',
                success: 'Yes',
                error: 'No',
                callback: function (value) {
                    alert(value);
                }
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 280px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>Can you alert my response?</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Yes</button>
                        <button className='ui-dialog-error' value='error'>No</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Heading as='h3'>Toast Messages</Heading>
        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable ui-sm-align-c'>
                    A toast message appears at the top of the screen with a default accent color. When the message is clicked, it dismisses by sliding upward. If not clicked, it automatically dismisses after a short delay.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview play={() => {
            Alerts.Message({
                msg: 'Default toast message.',
            });
        }}>
            <div className='ui-alerts-msg ui-alerts-demo ui-c ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute'
                style={{ zIndex: 'unset' }}>
                Oh no! Houston, we have a problem.
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-c ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute'
                style={{ top: '83px', zIndex: 'unset' }}>
                Hey, swe have a message again.
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-c ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute'
                style={{ top: '146px', zIndex: 'unset' }}>
                Here is the first default message.
            </div>
        </Preview>
        </>
    );
}
