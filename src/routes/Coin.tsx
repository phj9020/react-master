import React from 'react';
import { useParams } from "react-router-dom";


function Coin () {
    const {coinID} = useParams();
    console.log(coinID);
    return (
        <h1>Coin : {coinID}</h1>
    )
}

export default Coin;