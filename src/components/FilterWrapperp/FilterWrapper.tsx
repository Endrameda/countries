import React, {FC} from 'react';
import './filterWrapper.css';

import {ReactComponent as SearchIcon} from "../../assets/icons/search-outline.svg";

interface FilterWrapperProps {
    setSearchText: any
}

export const FilterWrapper : FC<FilterWrapperProps> = ({setSearchText}) => {

    return (
        <div className="filterWrapper">
            <label className="search">
                <SearchIcon/>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </label>

            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
};
