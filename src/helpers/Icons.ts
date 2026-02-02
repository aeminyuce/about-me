import Alerts from 'uilab/react/Alerts';

// copy icon name
export const copyIconName = (text: string) => {
    if (document.hasFocus()) {
        navigator.clipboard.writeText(text).then(() => {
            Alerts.Message({
                msg: `<b>Copied!</b><br>${text}`,
                theme: 'success',
            });
        }).catch((err) => {
            Alerts.Message({
                msg: `<b>Failed to copy ${text}!</b><br>${err}`,
                theme: 'danger',
            });
        });
    }
};