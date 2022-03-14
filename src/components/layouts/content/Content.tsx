import React from 'react';

interface type {
    children: React.ReactNode
}

export const Content = ({children}: type) => {
    return (
        <div className="max-w-[1300px] mx-auto">
            {children}
        </div>
    );
};
