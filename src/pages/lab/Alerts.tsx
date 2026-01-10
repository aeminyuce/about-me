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
        <Heading as='h3'>Dialog Messages</Heading>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable'>
                    A simple dialog with a success button in a gray footer. This dialog cannot be closed by clicking outside the window; it can only be closed by clicking the success button. When the dialog opens, the success button is focused by default.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview onClick={() => {
            Alerts.Dialog({
                msg: 'I am simple.',
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 320px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <div className='ui-dialog-msg'>I am simple.</div>
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-success' value='success'>OK</button>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable'>
                    A simple dialog with a success button and custom text can only be closed by clicking the success button. When the dialog opens, the success button is focused by default.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview onClick={() => {
            Alerts.Dialog({
                msg: 'Everything will be OK.',
                success: 'Got it!',
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 320px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <div className='ui-dialog-msg'>Everything will be OK.</div>
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-success' value='success'>Got it!</button>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable'>
                    A dialog include success and error buttons with custom text. This dialog can be closed by clicking outside the dialog window, and it also includes a close button in the top‑right corner. Additionally, this dialog can be closed using the ESC key on the keyboard. When a dialog contains an error button, the error button is focused first when the dialog opens.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview onClick={() => {
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
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-success' value='success'>Yes, delete.</button>
                    <button className='ui-dialog-error' value='error'>Noooo!</button>
                </div>
            </div>
        </Preview>

        <Grid.Row>
            <Grid.Col xl={10} lg={10} size={12}>
                <p className='ui-font-16 ui-color-black-50 ui-font-readable'>
                    A dialog include success, error, and optional buttons along with custom text. The dialog is closable and supports closing with the ESC key. All button types are placed in the footer, and when the dialog opens, the error button is focused first.
                </p>
            </Grid.Col>
        </Grid.Row>
        <Preview onClick={() => {
            Alerts.Dialog({
                msg: 'Are you sure you want to donwload your backup files?',
                success: 'Yes, please.',
                error: 'Forget it!',
                custom: {
                    first: 'Maybe', second: 'Later'
                }
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative'
                style={{ width: 'clamp(280px, 50%, 480px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>Are you sure you want to donwload your backup files?</div>
                <div className='ui-dialog-buttons ui-ease-1st-btn'>
                    <button className='ui-dialog-custom' value='0'>Maybe</button>
                    <button className='ui-dialog-custom' value='1'>Later</button>
                    <button className='ui-dialog-success' value='success'>Yes, please.</button>
                    <button className='ui-dialog-error' value='error'>Forget it!</button>
                </div>
            </div>
        </Preview>
        </>
    );
}
