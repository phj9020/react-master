import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";


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


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />}></Route>
                <Route path="/:coinID" element={<Coin />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;