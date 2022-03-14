import React from 'react';
import {ThemeButton} from "../../ThemeButton/ThemeButton";

export const Header = () => {
    return (
        <header>
            <div>
                <h1 className="bg-white dark:bg-black">
                    Where in the world
                </h1>
                <ThemeButton/>
            </div>
        </header>
    );
};
