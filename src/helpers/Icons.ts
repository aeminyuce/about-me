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
export const copyIconName = (text: string, category: string) => {
    const getCategory = category.toLowerCase();
    const capitalizeText = text
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join('');

    const getText = `import { Icon${capitalizeText} } from 'uilab-icons/react/${getCategory}/${text}';`;

    copyToClipboard(getText)
        .then(() => {
            Alerts.Message({
                msg: `<b>Icon source copied!</b><br>${getText}`,
                theme: 'success',
            });
        })
        .catch((err) => {
            Alerts.Message({
                msg: `<b>Failed to copy ${getText}!</b><br>${err}`,
                theme: 'danger',
            });
        });
};