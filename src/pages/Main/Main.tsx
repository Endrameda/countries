import React, {useState} from 'react';
import {Cards} from "../../components/Cards/Cards";
import {FilterWrapper} from "../../components/FilterWrapper/FilterWrapper";

export const Main = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState(null);

    return (
        <>
            <FilterWrapper
                setSearchText={setSearchText}
                setSelectedFilter={setSelectedFilter}/>
            <Cards
                searchText={searchText}
                selectedFilter={selectedFilter}/>
        </>
    );
};
