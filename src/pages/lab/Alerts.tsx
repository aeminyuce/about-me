import React from 'react';
import Alerts from '@ui/Alerts';
import Code from '@ui/Code';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
import Spacer from '@ui/Spacer';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { headings, themeRandomizer } from '@helpers/Lab';
import Description from '@components/common/Description';
import Preview from '@components/common/Preview';
import BreadcrumbsWrapper from '@components/lab/BreadcrumbsWrapper';
import ShowCode from '@components/lab/ShowCode';

// assets
import { IconRemove } from '@icon/general/remove';

export default function () {
    const { api } = useStoreContext();
    const title = headings('alerts');

    const alerts = api?.lab?.alerts;
    const desc = alerts?.desc;
    const text = alerts?.text;

    if (alerts) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <ShowCode id='dialogs' />
        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.dlg_simple}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.simple,
            });
        }}>
            <Item as='div' className='ui-alerts-dialog ui-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: 'clamp(280px, 50%, 300px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <Item as='div' className='ui-dialog-msg'>{text?.simple}</Item>
                <Item as='div' className='ui-dialog-buttons ui-ease-1st-bg'>
                    <Item as='div' className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.ok}</button>
                    </Item>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.dlg_singleBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.beOk,
                success: text?.got,
            });
        }}>
            <Item as='div' className='ui-alerts-dialog ui-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: 'clamp(280px, 50%, 320px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <Item as='div' className='ui-dialog-msg'>{text?.beOk}</Item>
                <Item as='div' className='ui-dialog-buttons ui-ease-1st-bg'>
                    <Item as='div' className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.got}</button>
                    </Item>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.dlg_twoBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.remove,
                success: text?.yes,
                error: text?.no,
            });
        }}>
            <Item as='div' className='ui-alerts-dialog ui-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: 'clamp(280px, 50%, 450px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <Item as='div' className='ui-dialog-msg'>{text?.remove}</Item>
                <Item as='div' className='ui-dialog-buttons ui-ease-1st-bg'>
                    <Item as='div' className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
                    </Item>
                </Item>
            </Item>
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
            <Item as='div' className='ui-alerts-dialog ui-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: 'clamp(280px, 50%, 492px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <Item as='div' className='ui-dialog-msg'>{text?.download}</Item>
                <Item as='div' className='ui-dialog-buttons ui-ease-1st-bg'>
                    <button className='ui-dialog-custom ui-theme-purpleBlue ui-fill-light-100 ui-hover' value='0'>{text?.maybe}</button>
                    <button className='ui-dialog-custom ui-theme-purpleBlue ui-fill-light-100 ui-hover' value='1'>{text?.later}</button>
                    <Item as='div' className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
                    </Item>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.dlg_callback}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.alert,
                success: text?.yes,
                error: text?.no,
                callback: (value) => {
                    alert(value);
                }
            });
        }}>
            <Item as='div' className='ui-alerts-dialog ui-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: 'clamp(280px, 50%, 280px)', top: '0', left: '0', transform: 'none', zIndex: 'unset' }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <Item as='div' className='ui-dialog-msg'>{text?.alert}</Item>
                <Item as='div' className='ui-dialog-buttons ui-ease-1st-bg'>
                    <Item as='div' className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
                    </Item>
                </Item>
            </Item>
        </Preview>

        <Code lines type='js' id='dialogs' className='ui-round-t'>
{`Alerts.Dialog({
    msg: 'Your dialog text',            // required
    success: 'Yes',                     // Okay (predefined)
    error: 'No',
    custom: {
        // custom options support up to three
        first: 'Maybe',
        second: 'Later',
        third: 'Not now',
    },
    callback: (value) => {
        // value returns which option you selected
        alert(value);
    }
);`}
        </Code>
        <Code.Panel info='js' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <ShowCode id='messages' />
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-ct' style={{ transform: 'translate(-50%, 52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.danger}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-ct' style={{ transform: 'translate(-50%, 26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.warning}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-ct' style={{ transform: 'translateX(-50%)', zIndex: 'unset' }}>
                {text?.success}
            </Item>
        </Preview>

        <Description>{desc?.msg_bottom}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'cb',
            });
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-cb' style={{ transform: 'translate(-50%, -52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.success}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-cb' style={{ transform: 'translate(-50%, -26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.warning}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-cb' style={{ zIndex: 'unset' }}>
                {text?.danger}
            </Item>
        </Preview>

        <Description>{desc?.msg_tl}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'tl',
            });
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-tl' style={{ transform: 'translateY(52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.danger}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-tl' style={{ transform: 'translateY(26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.success}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-tl' style={{ zIndex: 'unset' }}>
                {text?.warning}
            </Item>
        </Preview>

        <Description>{desc?.msg_tr}</Description>
        <Preview playPos={'br'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'tr',
            });
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-tr' style={{ transform: 'translateY(52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.danger}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-tr' style={{ transform: 'translateY(26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.warning}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-tr' style={{ zIndex: 'unset' }}>
                {text?.success}
            </Item>
        </Preview>

        <Description>{desc?.msg_br}</Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'br',
            });
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-br' style={{ transform: 'translateY(-52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.success}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-br' style={{ transform: 'translateY(-26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.warning}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-br' style={{ zIndex: 'unset' }}>
                {text?.danger}
            </Item>
        </Preview>

        <Description>{desc?.msg_bl}</Description>
        <Preview playPos={'tr'} play={() => {
            const type = themeRandomizer();
            Alerts.Message({
                msg: text[type],
                theme: type,
                pos: 'bl',
            })
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-danger ui-bl' style={{ transform: 'translateY(-52px) scale(0.95)', zIndex: 'unset' }}>
                {text?.danger}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-success ui-bl' style={{ transform: 'translateY(-26px) scale(0.97)', zIndex: 'unset' }}>
                {text?.success}
            </Item>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-msg-warning ui-bl' style={{ zIndex: 'unset' }}>
                {text?.warning}
            </Item>
        </Preview>

        <Description>{desc?.msg_action}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Message({
                msg: text?.action,
                pos: 'cb',
                action: {
                    name: text?.actionName,
                    callback: () => { alert(text?.actionCallback); }
                }
            })
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <Item as='div' className='ui-alerts-msg ui-demo ui-show ui-show-ease ui-theme-blue ui-fill-dark-100 ui-cb ui-has-action' style={{ zIndex: 'unset' }}>
                {text?.action}
                <button className='ui-hover-l-more ui-ease-layout'>{text?.actionName}</button>
            </Item>
        </Preview>

        <Code lines type='js' id='messages' className='ui-round-t'>
{`Alerts.Message({
    msg: 'Your message text',           // required
    theme: 'success',                   // success (predefined) | warning | danger
    pos: 'tr',                          // ct (predefined) | cb | tr | tl | br | bl
    action: {
        // you can optionally add a single action to your messages
        name: 'Undo',
        callback: () => {
            alert('Your undo message');
        }
    }
});`}
        </Code>
        <Code.Panel info='js' className='ui-m-1-t ui-round-b' />
        </>
    )
}
