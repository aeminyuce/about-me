import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { headings, themeRandomizer } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconRemove } from 'uilab-icons/react/general/remove';

export default function () {
    const { api } = useStoreContext();
    const title = headings('alerts');

    const alerts = api?.lab?.alerts;
    const desc = alerts?.desc;
    const text = alerts?.text;

    // styles
    const style = {
        dlg: { top: '0', left: '0', transform: 'none', zIndex: 'unset' },
        msg: { zIndex: 'unset' },
        v1: '83px',
        v2: '146px',
        clamp: (num: number) => `clamp(280px, 50%, ${num}px)`,
    };

    if (alerts) return (
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
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: style.clamp(300), ...style.dlg }}>
                <div className='ui-dialog-msg'>{text?.simple}</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.ok}</button>
                    </div>
                </div>
            </div>
        </Preview>

        <Description>{desc?.dlg_singleBtn}</Description>
        <Preview playPos={'tr'} play={() => {
            Alerts.Dialog({
                msg: text?.beOk,
                success: text?.got,
            });
        }}>
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: style.clamp(320), ...style.dlg }}>
                <div className='ui-dialog-msg'>{text?.beOk}</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.got}</button>
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
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: style.clamp(450), ...style.dlg }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>{text?.remove}</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
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
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: style.clamp(492), ...style.dlg }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>{text?.download}</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <button className='ui-dialog-custom ui-theme-purpleBlue ui-fill-light-100 ui-hover' value='0'>{text?.maybe}</button>
                    <button className='ui-dialog-custom ui-theme-purpleBlue ui-fill-light-100 ui-hover' value='1'>{text?.later}</button>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
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
            <div className='ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative' style={{ width: style.clamp(280), ...style.dlg }}>
                <button className='ui-dialog-close ui-ease-layout'>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className='ui-dialog-msg'>{text?.alert}</div>
                <div className='ui-dialog-buttons ui-ease-1st-bg'>
                    <div className='ui-ease-1st-bg'>
                        <button className='ui-dialog-success' value='success'>{text?.yes}</button>
                        <button className='ui-dialog-error' value='error'>{text?.no}</button>
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-danger ui-c' style={style.msg}>
                {text?.danger}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-warning ui-c' style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-success ui-c' style={{ top: style.v2, ...style.msg }}>
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-danger ui-tl' style={style.msg}>
                {text?.danger}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-warning ui-tl' style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-success ui-tl' style={{ top: style.v2, ...style.msg }}>
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-danger ui-tr' style={style.msg}>
                {text?.danger}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-warning ui-tr' style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-success ui-tr' style={{ top: style.v2, ...style.msg }}>
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-danger ui-br' style={{ bottom: style.v2, ...style.msg }}>
                {text?.danger}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-warning ui-br' style={{ bottom: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-success ui-br' style={style.msg}>
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
        }} className='ui-round-1st ui-shadow-lg-1st ui-ease-1st-layout ui-set-absolute-1st'>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-danger ui-bl' style={{ bottom: style.v2, ...style.msg }}>
                {text?.danger}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-warning ui-bl' style={{ bottom: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className='ui-alerts-msg ui-alerts-demo ui-show ui-show-ease ui-msg-success ui-bl' style={style.msg}>
                {text?.success}
            </div>
        </Preview>
        </>
    );
}
