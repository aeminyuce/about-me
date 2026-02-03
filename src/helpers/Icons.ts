import Alerts from 'uilab/react/Alerts';

// copy to clipboard (ios safari supported)
const copyToClipboard = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }

    // fallback for iOS Safari
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // avoid scrolling to bottom on iOS
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        document.execCommand('copy');
        document.body.removeChild(textarea);
        return Promise.resolve();

    } catch (err) {
        document.body.removeChild(textarea);
        return Promise.reject(err);
    }
}

// copy icon name
export const copyIconName = (text: string) => {
    copyToClipboard(text)
        .then(() => {
            Alerts.Message({
                msg: `<b>Copied!</b><br>${text}`,
                theme: 'success',
            });
        })
        .catch((err) => {
            Alerts.Message({
                msg: `<b>Failed to copy ${text}!</b><br>${err}`,
                theme: 'danger',
            });
        });
};