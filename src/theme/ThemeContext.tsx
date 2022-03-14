import React, {useState, useEffect, createContext, FC} from 'react';

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
}

const defaultState = {
    dark: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC = ({children}) => {
    const [dark, setDark] = useState(defaultState.dark);

    const rawSetTheme = (isDark: boolean) => {
        const root = window.document.documentElement

        root.classList.remove(!isDark ? 'dark' : 'light')
        root.classList.add(isDark ? 'dark' : 'light')

        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    useEffect(() => {
        rawSetTheme(dark)
    }, [dark])

    const toggleDark = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider
            value={{
                dark,
                toggleDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
