import React from 'react';
import {Header} from "../layouts/Header/Header";
import {Content} from "../layouts/content/Content";
import {Routes, Route} from "react-router-dom";
import {Main} from "../../pages/Main/Main";
import {DetailPage} from "../../pages/Detail/DetailPage";

function App() {
    return (
        <div className="bg-white-smoke dark:bg-dark-blue-dmb">
            <Header/>

            <Content>
                <Routes>
                    <Route path="/" element={
                        <Main/>}/>
                    <Route path="country/:name" element={<DetailPage/>}/>
                </Routes>
            </Content>
        </div>
    );
}

export default App;
