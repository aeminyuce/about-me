// returns a random theme type
export const themeRandomizer = () => {
    type Theme = 'success' | 'warning' | 'danger';

    const types: Theme[] = ['success', 'warning', 'danger'];
    return types[Math.floor(Math.random() * types.length)];
};