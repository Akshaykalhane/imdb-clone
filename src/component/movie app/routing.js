import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import Movie from "./movie";
import Details from "./details";
import Header from "./header";

const Routing=()=>{
    return(
        <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movie />}>
                </Route>
        <Route path="/details/:id" element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;