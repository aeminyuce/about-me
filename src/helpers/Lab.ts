// returns a random theme type
type RandomTheme = 'success' | 'warning' | 'danger';

export const themeRandomizer = () => {
    const types: RandomTheme[] = ['success', 'warning', 'danger'];
    return types[Math.floor(Math.random() * types.length)];
};