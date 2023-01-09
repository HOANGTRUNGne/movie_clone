import React, {useState, useEffect} from 'react';
import Header from "./component/Header/Header";
import MoviesPage from "./component/Movie/MoviesPage";
import {Route, Routes} from "react-router-dom";
import TvShowPage from "./component/TvShowPage";
import TrendingPage from "./component/TrendingPage";
import PricingPage from "./component/PricingPage";
import MovieDetail from "./component/Movie/MovieDetail";
import ErrorPage from "./component/ErrorPage";
import {AuthContextProvider} from "./context/AuthContext";

function App() {

    return (
        <>
            <AuthContextProvider >
                <Header/>
                <Routes>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={'/info/:id'} element={<MovieDetail/>}/>
                    <Route path={'/info/*'} element={<ErrorPage/>}/>
                    <Route path={'/tvshow'} element={<TvShowPage/>}/>
                    <Route path={'/trending'} element={<TrendingPage/>}/>
                    <Route path={'/pricing'} element={<PricingPage/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Routes></AuthContextProvider>
        </>
    );
}

export default App;
