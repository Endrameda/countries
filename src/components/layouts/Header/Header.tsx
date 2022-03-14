import React from 'react';
import {ThemeButton} from "../../ThemeButton/ThemeButton";

import './header.css'

export const Header = () => {
    return (
        <header className="header shadow-md shadow-gray-200 dark:shadow-dark-blue-lmt mb-10">
            <div className="header__container py-6 px-2.5">
                <h1 className="text-[20px] sm:text-2xl font-extrabold text-dark-blue-lmt dark:text-white">
                    Where in the world?
                </h1>
                <ThemeButton/>
            </div>
        </header>
    );
};
