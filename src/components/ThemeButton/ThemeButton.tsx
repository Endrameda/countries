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
        <button onClick={handleOnClick} className="text-[15px] sm:text-md flex items-center text-dark-blue-lmt dark:text-white">
            <MoonIcon className="w-[20px] mr-2.5" /> Dark Mode
        </button>
    );
};
