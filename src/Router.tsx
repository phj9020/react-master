import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from './routes/Price';
import Chart from './routes/Chart';

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

// v5
// <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
// </Switch> 


// v6 << current version  Switch 대신 Routes로 사용
// <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
// </Routes> 


function Router({toggleDark, isDark} : IRouterProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins toggleDark={toggleDark} />} ></Route>
                <Route path="/:coinID" element={<Coin />} >
                    <Route path="chart" element={<Chart isDark={isDark} />} />
                    <Route path="price" element={<Price />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;