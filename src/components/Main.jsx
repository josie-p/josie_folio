import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Home, Navbar, Portfolio } from "./";

/* 
--home page
--about page
--portfolio page
*/

const Main = () => {
    return(
        <div id="main">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={ < Home/> } />
                <Route exact path="/about" element={ <About/> } />
                <Route exact path="/portfolio" element={ <Portfolio/> } />
            </Routes>
        </div>
    )
}

export default Main;