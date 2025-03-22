import React from 'react';
import {Route, Routes} from "react-router-dom";
import GetInTouch from "../modules/get-in-touch/GetInTouch";
import HomePage from "../pages/HomePage/HomePage";


const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/GetInTouch'  element={<GetInTouch/>} />


        </Routes>
    );
};

export default MainRoutes;