import React, {useContext} from 'react';

import {ReactComponent as MoonIcon} from '../../assets/icons/moon-outline.svg';
import {ThemeContext} from "../../theme/ThemeContext";

export const ThemeButton = () => {
    const { toggleDark } = useContext(ThemeContext);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleDark?.();
    };

    return (
        <button onClick={handleOnClick}>
            <MoonIcon /> Dark Mode
        </button>
    );
};
