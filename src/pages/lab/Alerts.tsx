import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { themeRandomizer } from '../../helpers/Lab';

// assets
import { IconRemove } from 'uilab-icons/react/general/remove';

export default function () {
    // dialogs
    const dialogClasses = 'ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative';
    const dialogStyles = { top: '0', left: '0', transform: 'none', zIndex: 'unset' };

    // messages
    const messageClasses = 'ui-alerts-msg ui-alerts-demo ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute';
    const messageStyles = { zIndex: 'unset' };

    const messages = {
        danger: 'Oh no! Houston, we have a problem.',
        warning: 'Hey, we have a message again.',
        success: 'Here is the first default message.',
    };

    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item>Alerts</Breadcrumbs.Item>
        </BreadcrumbsWrapper>

        <Heading as='h1'>Alerts</Heading>
        <Heading as='h3' id='Dialogs'>Dialogs</Heading>

        <Description>
            A simple dialog includes a single button in a gray footer. It cannot be closed by clicking outside the window, it can only be closed by clicking the button. When the dialog opens, the button is focused by default.
        </Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: 'I am simple.',
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 320px)', ...dialogStyles }}>
                <div className='ui-dialog-msg'>I am simple.</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Okay</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>
            This dialog includes single button along with custom text.
        </Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: 'Everything will be OK.',
                success: 'Got it!',
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 320px)', ...dialogStyles }}>
                <div className='ui-dialog-msg'>Everything will be OK.</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>Got it!</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>
            This dialog includes success and error buttons with custom text. This dialog can be closed by clicking outside the dialog window, and it also includes a close button in the top‑right corner. Additionally, this dialog can be closed using the ESC key on the keyboard. When a dialog contains an error button, the error button is focused first when the dialog opens.
        </Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: 'Are you sure you want to remove from your list?',
                success: 'Yes, delete.',
                error: 'Noooo!',
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 450px)', ...dialogStyles }}>
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

        <Description>
            This dialog includes success, error, and custom buttons along with custom text.  Custom buttons are displayed separately at the top. When all button types are placed in the footer, and when the dialog opens, the error button is focused first.
        </Description>
        <Preview playPos={'tr'} play={() => {
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
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 480px)', ...dialogStyles }}>
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

        <Description>
            This dialog runs a callback function when the success or error button is clicked. In this example, it displays an alert showing which option you selected.
        </Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: 'Can you alert my response?',
                success: 'Yes',
                error: 'No',
                callback: function (value) {
                    alert(value);
                }
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 280px)', ...dialogStyles }}>
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

        <Heading as='h3' id='Messages'>Messages</Heading>
        <Description>
            A message appears at the top of the screen in one of three colors: success, warning, or danger. When the message is clicked, it dismisses by sliding upward. If not clicked, it automatically dismisses after a short delay.
        </Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: messages[type],
                theme: type,
            });
        }}>
            <div className={`${messageClasses} ui-msg-danger ui-c`} style={messageStyles}>
                {messages.danger}
            </div>
            <div className={`${messageClasses} ui-msg-warning ui-c`} style={{ top: '83px', ...messageStyles }}>
                {messages.warning}
            </div>
            <div className={`${messageClasses} ui-msg-success ui-c`} style={{ top: '146px', ...messageStyles }}>
                {messages.success}
            </div>
        </Preview>

        <Description>
            A message appears at the top-left of the screen.
        </Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: messages[type],
                theme: type,
                pos: 'tl',
            });
        }}>
            <div className={`${messageClasses} ui-msg-danger ui-tl`} style={messageStyles}>
                {messages.danger}
            </div>
            <div className={`${messageClasses} ui-msg-warning ui-tl`} style={{ top: '83px', ...messageStyles }}>
                {messages.warning}
            </div>
            <div className={`${messageClasses} ui-msg-success ui-tl`} style={{ top: '146px', ...messageStyles }}>
                {messages.success}
            </div>
        </Preview>

        <Description>
            A message appears at the top-right of the screen.
        </Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: messages[type],
                theme: type,
                pos: 'tr',
            });
        }}>
            <div className={`${messageClasses} ui-msg-danger ui-tr`} style={messageStyles}>
                {messages.danger}
            </div>
            <div className={`${messageClasses} ui-msg-warning ui-tr`} style={{ top: '83px', ...messageStyles }}>
                {messages.warning}
            </div>
            <div className={`${messageClasses} ui-msg-success ui-tr`} style={{ top: '146px', ...messageStyles }}>
                {messages.success}
            </div>
        </Preview>

        <Description>
            A message appears at the bottom-left of the screen.
        </Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: messages[type],
                theme: type,
                pos: 'br',
            });
        }}>
            <div className={`${messageClasses} ui-msg-danger ui-br`} style={{ bottom: '146px', ...messageStyles }}>
                {messages.danger}
            </div>
            <div className={`${messageClasses} ui-msg-warning ui-br`} style={{ bottom: '83px', ...messageStyles }}>
                {messages.warning}
            </div>
            <div className={`${messageClasses} ui-msg-success ui-br`} style={messageStyles}>
                {messages.success}
            </div>
        </Preview>

        <Description>
            A message appears at the top-left of the screen.
        </Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: messages[type],
                theme: type,
                pos: 'bl',
            })
        }}>
            <div className={`${messageClasses} ui-msg-danger ui-bl`} style={{ bottom: '146px', ...messageStyles }}>
                {messages.danger}
            </div>
            <div className={`${messageClasses} ui-msg-warning ui-bl`} style={{ bottom: '83px', ...messageStyles }}>
                {messages.warning}
            </div>
            <div className={`${messageClasses} ui-msg-success ui-bl`} style={messageStyles}>
                {messages.success}
            </div>
        </Preview>
        </>
    );
}
