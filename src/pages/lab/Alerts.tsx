import * as React from 'react';
import Alerts from 'uilab/react/Alerts';
import Heading from 'uilab/react/Heading';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../states/StoreContext';
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

    // classes
    const btnWrap = 'ui-ease-1st-bg';

    const dlg = {
        base: 'ui-alerts-dialog ui-alerts-demo ui-round ui-shadow-lg ui-show ui-show-ease ui-m-auto ui-set-relative',
        close: 'ui-dialog-close ui-ease-layout',
        msg: 'ui-dialog-msg',
        btnWrap: btnWrap,
        btn: `ui-dialog-buttons ${btnWrap}`,
        success: 'ui-dialog-success',
        error: 'ui-dialog-error',
        custom: 'ui-dialog-custom',
    };

    const msg = {
        base: 'ui-alerts-msg ui-alerts-demo ui-round ui-shadow-lg ui-ease-layout ui-show ui-show-ease ui-set-absolute',
        danger: 'ui-msg-danger',
        warning: 'ui-msg-warning',
        success: 'ui-msg-success',
        tl: 'ui-tl',
        tr: 'ui-tr',
        br: 'ui-br',
        bl: 'ui-bl',
        c: 'ui-c',
    };

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
            <div className={dlg.base} style={{ width: style.clamp(300), ...style.dlg }}>
                <div className={dlg.msg}>{text?.simple}</div>
                <div className={dlg.btn}>
                    <div className={dlg.btnWrap}>
                        <button className={dlg.success} value='success'>{text?.ok}</button>
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
            <div className={dlg.base} style={{ width: style.clamp(320), ...style.dlg }}>
                <div className={dlg.msg}>{text?.beOk}</div>
                <div className={dlg.btn}>
                    <div className={dlg.btnWrap}>
                        <button className={dlg.success} value='success'>{text?.got}</button>
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
            <div className={dlg.base} style={{ width: style.clamp(450), ...style.dlg }}>
                <button className={dlg.close}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dlg.msg}>{text?.remove}</div>
                <div className={dlg.btn}>
                    <div className={dlg.btnWrap}>
                        <button className={dlg.success} value='success'>{text?.yes}</button>
                        <button className={dlg.error} value='error'>{text?.no}</button>
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
            <div className={dlg.base} style={{ width: style.clamp(480), ...style.dlg }}>
                <button className={dlg.close}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dlg.msg}>{text?.download}</div>
                <div className={dlg.btn}>
                    <button className={dlg?.custom} value='0'>{text?.maybe}</button>
                    <button className={dlg?.custom} value='1'>{text?.later}</button>
                    <div className={dlg.btnWrap}>
                        <button className={dlg.success} value='success'>{text?.yes}</button>
                        <button className={dlg.error} value='error'>{text?.no}</button>
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
            <div className={dlg.base} style={{ width: style.clamp(280), ...style.dlg }}>
                <button className={dlg.close}>
                    <SvgIcon as='js' src={IconRemove} />
                </button>
                <div className={dlg.msg}>{text?.alert}</div>
                <div className={dlg.btn}>
                    <div className={dlg.btnWrap}>
                        <button className={dlg.success} value='success'>{text?.yes}</button>
                        <button className={dlg.error} value='error'>{text?.no}</button>
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
            <div className={`${msg.base} ${msg.danger} ${msg.c}`} style={style.msg}>
                {text?.danger}
            </div>
            <div className={`${msg.base} ${msg.warning} ${msg.c}`} style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className={`${msg.base} ${msg.success} ${msg.c}`} style={{ top: style.v2, ...style.msg }}>
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
            <div className={`${msg.base} ${msg.danger} ${msg.tl}`} style={style.msg}>
                {text?.danger}
            </div>
            <div className={`${msg.base} ${msg.warning} ${msg.tl}`} style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className={`${msg.base} ${msg.success} ${msg.tl}`} style={{ top: style.v2, ...style.msg }}>
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
            <div className={`${msg.base} ${msg.danger} ${msg.tr}`} style={style.msg}>
                {text?.danger}
            </div>
            <div className={`${msg.base} ${msg.warning} ${msg.tr}`} style={{ top: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className={`${msg.base} ${msg.success} ${msg.tr}`} style={{ top: style.v2, ...style.msg }}>
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
            <div className={`${msg.base} ${msg.danger} ${msg.br}`} style={{ bottom: style.v2, ...style.msg }}>
                {text?.danger}
            </div>
            <div className={`${msg.base} ${msg.warning} ${msg.br}`} style={{ bottom: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className={`${msg.base} ${msg.success} ${msg.br}`} style={style.msg}>
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
            <div className={`${msg.base} ${msg.danger} ${msg.bl}`} style={{ bottom: style.v2, ...style.msg }}>
                {text?.danger}
            </div>
            <div className={`${msg.base} ${msg.warning} ${msg.bl}`} style={{ bottom: style.v1, ...style.msg }}>
                {text?.warning}
            </div>
            <div className={`${msg.base} ${msg.success} ${msg.bl}`} style={style.msg}>
                {text?.success}
            </div>
        </Preview>
        </>
    );
}
