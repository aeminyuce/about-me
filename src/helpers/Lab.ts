// returns a random theme type
type RandomTheme = 'success' | 'warning' | 'danger';

export const themeRandomizer = () => {
    const types: RandomTheme[] = ['success', 'warning', 'danger'];
    return types[Math.floor(Math.random() * types.length)];
};

// scroll to hash
export const scrollToHash = (id: string) => {
    window.requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView(true);
    });
}

// clear string spaces
export const clearSpaces = (text: string) => {
    return text ? text.replace(/[\s+]/g, '') : '';
}