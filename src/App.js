import React from 'react';
import Header from "./component/Header/Header";
import MoviesPage from "./component/MoviesPage";
import {Route, Routes} from "react-router-dom";
import TvShowPage from "./component/TvShowPage";
import TrendingPage from "./component/TrendingPage";
import PricingPage from "./component/PricingPage";

function App() {
  return (
   <>
       <Header />
       <Routes>
           <Route path={'/'} element={<MoviesPage/>}/>
           <Route path={'/tvshow'} element={<TvShowPage/>}/>
           <Route path={'/trending'} element={<TrendingPage/>}/>
           <Route path={'/pricing'} element={<PricingPage/>}/>
       </Routes>
   </>
  );
}

export default App;