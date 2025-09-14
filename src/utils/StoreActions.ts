import { useContext } from 'react';

// utils
import { StoreContext, actions } from './StoreReducer';

export const StoreActions = () => {

    const { store, setStore } = useContext(StoreContext);

    // themes
    const theme = store?.theme;

    const setTheme = (name: string) => {
        setStore({ type: actions.theme, theme: name })
        return name;
    }

    return {
        // themes
        theme,
        setTheme,
    }
}
