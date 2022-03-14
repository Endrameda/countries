import React from 'react';
import {Header} from "../layouts/Header/Header";
import {useGetAllCountriesQuery} from "../../redux/api";
import {Content} from "../layouts/content/Content";
import {Cards} from "../Cards/Cards";

function App() {

    return (
        <div className="bg-white-smoke dark:bg-dark-blue-dmb">
            <Header/>

            <Content><Cards/></Content>
        </div>
    );
}

export default App;
