import React, {FC} from 'react';
import './filterWrapper.css';

import {ReactComponent as SearchIcon} from "../../assets/icons/search-outline.svg";
import Select from "react-select";

interface FilterWrapperProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    setSelectedFilter: any,
}

const options = [
    {value: '', label: 'Filter By Region'},
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

export const FilterWrapper: FC<FilterWrapperProps> = ({setSearchText, setSelectedFilter}) => {

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

            <Select
                className="custom-select"
                classNamePrefix="select-inner"
                defaultValue={options[0]}
                onChange={setSelectedFilter}
                options={options}
                isSearchable={false}
            />
        </div>
    );
};
