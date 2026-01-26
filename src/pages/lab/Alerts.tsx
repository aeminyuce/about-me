import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings, themeRandomizer } from '../../helpers/Lab';

// assets
import { IconRemove } from 'uilab-icons/react/general/remove';

export default function () {
    const title = headings('alerts');

    const desc = {
        'dlg_simple': 'A simple dialog includes a single button in a gray footer. It cannot be closed by clicking outside the window, it can only be closed by clicking the button. When the dialog opens, the button is focused by default.',
        'dlg_singleBtn': 'This dialog includes single button along with custom text.',
        'dlg_twoBtn' : 'This dialog includes success and error buttons with custom text. This dialog can be closed by clicking outside the dialog window, and it also includes a close button in the top‑right corner. Additionally, this dialog can be closed using the ESC key on the keyboard. When a dialog contains an error button, the error button is focused first when the dialog opens.',
        'dlg_threeBtn': 'This dialog includes success, error, and custom buttons along with custom text.  Custom buttons are displayed separately at the top. When all button types are placed in the footer, and when the dialog opens, the error button is focused first.',
        'dlg_callback': 'This dialog runs a callback function when the success or error button is clicked. In this example, it displays an alert showing which option you selected.',
        'msg_default': 'A message appears at the top of the screen in one of three colors: success, warning, or danger. When the message is clicked, it dismisses by sliding upward. If not clicked, it automatically dismisses after a short delay.',
        'msg_tl' : 'A message appears at the top-left of the screen.',
        'msg_tr': 'A message appears at the top-right of the screen.',
        'msg_br': 'A message appears at the bottom-right of the screen.',
        'msg_bl': 'A message appears at the bottom-left of the screen.',
    };

    const text = {
        'ok': 'Okay',
        'got': 'Got it!',
        'yes': 'Yes',
        'no': 'No',
        'maybe': 'Maybe',
        'later': 'Remind me later!',
        'simple': 'I am simple.',
        'willOk': 'Everything will be OK.',
        'remove': 'Are you sure you want to remove from your list?',
        'download': 'Are you sure you want to donwload your backup files?',
        'alert': 'Can you alert my response?',
        'danger': 'Oh no! Houston, we have a problem.',
        'warning': 'Hey, we have a message again.',
        'success': 'Here is the first default message.',
    };

    // classes
    const dialogCloseClasses = 'ui-dialog-close ui-ease-layout';
    const dialogMsgClasses = 'ui-dialog-msg';
    const dialogClasses = 'ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative';

    const messageClasses = 'ui-alerts-msg ui-alerts-demo ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute ui-msg-';
    const dialogBtnWrapperClasses = 'ui-ease-1st-bg';
    const dialogBtnClasses = 'ui-dialog-buttons ui-ease-1st-bg';
    const dialogSuccessClasses = 'ui-dialog-success';
    const dialogErrorClasses = 'ui-dialog-error';

    // styles
    const dialogStyles = { top: '0', left: '0', transform: 'none', zIndex: 'unset' };
    const messageStyles = { zIndex: 'unset' };

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.dlg_simple}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.simple,
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 320px)', ...dialogStyles }}>
                <div className={dialogMsgClasses}>{text?.simple}</div>
                <div className={dialogBtnClasses}>
                    <div className={dialogBtnWrapperClasses}>
                        <button className={dialogSuccessClasses} value='success'>{text?.ok}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>{desc?.dlg_singleBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.willOk,
                success: text?.got,
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 320px)', ...dialogStyles }}>
                <div className={dialogMsgClasses}>{text?.willOk}</div>
                <div className={dialogBtnClasses}>
                    <div className={dialogBtnWrapperClasses}>
                        <button className={dialogSuccessClasses} value='success'>{text?.got}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>{desc?.dlg_twoBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.remove,
                success: text?.yes,
                error: text?.no,
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 450px)', ...dialogStyles }}>
                <button className={dialogCloseClasses}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dialogMsgClasses}>{text?.remove}</div>
                <div className={dialogBtnClasses}>
                    <div className={dialogBtnWrapperClasses}>
                        <button className={dialogSuccessClasses} value='success'>{text?.yes}</button>
                        <button className={dialogErrorClasses} value='error'>{text?.no}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>{desc?.dlg_threeBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.download,
                success: text?.yes,
                error: text?.no,
                custom: {
                    first: text?.maybe,
                    second: text?.later,
                }
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 480px)', ...dialogStyles }}>
                <button className={dialogCloseClasses}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dialogMsgClasses}>{text?.download}</div>
                <div className={dialogBtnClasses}>
                    <button className='ui-dialog-custom' value='0'>{text?.maybe}</button>
                    <button className='ui-dialog-custom' value='1'>{text?.later}</button>
                    <div className={dialogBtnWrapperClasses}>
                        <button className={dialogSuccessClasses} value='success'>{text?.yes}</button>
                        <button className={dialogErrorClasses} value='error'>{text?.no}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>{desc?.dlg_callback}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.alert,
                success: text?.yes,
                error: text?.no,
                callback: function (value) {
                    alert(value);
                }
            });
        }}>
            <div className={dialogClasses} style={{ width: 'clamp(280px, 50%, 280px)', ...dialogStyles }}>
                <button className={dialogCloseClasses}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dialogMsgClasses}>{text?.alert}</div>
                <div className={dialogBtnClasses}>
                    <div className={dialogBtnWrapperClasses}>
                        <button className={dialogSuccessClasses} value='success'>{text?.yes}</button>
                        <button className={dialogErrorClasses} value='error'>{text?.no}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.msg_default}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
            });
        }}>
            <div className={`${messageClasses}danger ui-c`} style={messageStyles}>
                {text?.danger}
            </div>
            <div className={`${messageClasses}warning ui-c`} style={{ top: '83px', ...messageStyles }}>
                {text?.warning}
            </div>
            <div className={`${messageClasses}success ui-c`} style={{ top: '146px', ...messageStyles }}>
                {text?.success}
            </div>
        </Preview>

        <Description>{desc?.msg_tl}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'tl',
            });
        }}>
            <div className={`${messageClasses}danger ui-tl`} style={messageStyles}>
                {text?.danger}
            </div>
            <div className={`${messageClasses}warning ui-tl`} style={{ top: '83px', ...messageStyles }}>
                {text?.warning}
            </div>
            <div className={`${messageClasses}success ui-tl`} style={{ top: '146px', ...messageStyles }}>
                {text?.success}
            </div>
        </Preview>

        <Description>{desc?.msg_tr}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'tr',
            });
        }}>
            <div className={`${messageClasses}danger ui-tr`} style={messageStyles}>
                {text?.danger}
            </div>
            <div className={`${messageClasses}warning ui-tr`} style={{ top: '83px', ...messageStyles }}>
                {text?.warning}
            </div>
            <div className={`${messageClasses}success ui-tr`} style={{ top: '146px', ...messageStyles }}>
                {text?.success}
            </div>
        </Preview>

        <Description>{desc?.msg_br}</Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'br',
            });
        }}>
            <div className={`${messageClasses}danger ui-br`} style={{ bottom: '146px', ...messageStyles }}>
                {text?.danger}
            </div>
            <div className={`${messageClasses}warning ui-br`} style={{ bottom: '83px', ...messageStyles }}>
                {text?.warning}
            </div>
            <div className={`${messageClasses}success ui-br`} style={messageStyles}>
                {text?.success}
            </div>
        </Preview>

        <Description>{desc?.msg_bl}</Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'bl',
            })
        }}>
            <div className={`${messageClasses}danger ui-bl`} style={{ bottom: '146px', ...messageStyles }}>
                {text?.danger}
            </div>
            <div className={`${messageClasses}warning ui-bl`} style={{ bottom: '83px', ...messageStyles }}>
                {text?.warning}
            </div>
            <div className={`${messageClasses}success ui-bl`} style={messageStyles}>
                {text?.success}
            </div>
        </Preview>
        </>
    );
}
