import React, {useState} from 'react';
import {Header} from "../layouts/Header/Header";
import {Content} from "../layouts/content/Content";
import {Cards} from "../Cards/Cards";
import {FilterWrapper} from "../FilterWrapperp/FilterWrapper";

function App() {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="bg-white-smoke dark:bg-dark-blue-dmb">
            <Header/>

            <Content>
                <FilterWrapper setSearchText={setSearchText}/>
                <Cards searchText={searchText}/>
            </Content>
        </div>
    );
}

export default App;
