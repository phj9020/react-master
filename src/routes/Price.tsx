import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPriceInfo } from '../api';
import { IpriceData } from './Coin';
import ApexChart from "react-apexcharts";

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:20vh;
    
    img {
        width: 50px;
    }
`

const Container =styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    color: #2ecc71;
`

const PercentChange = styled.div`
    background-color: white;
    padding:20px 20px;
    h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    span {
        color: black;
        font-weight: 500;
    } 
`


function Price(){
    const {coinID} = useParams();
    const {isLoading, data} = useQuery<IpriceData>("Test", () => fetchPriceInfo(coinID!))
    console.log(data && data.quotes.USD.percent_change_1h)
    return (
        <>
            {isLoading ? 
                <Loader><img src="/Spinner.gif" alt="loading" /></Loader>
            : 
                <Container>
                    <PercentChange>
                        <h3>Last 1 Hour</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_1h}%
                        </span>
                    </PercentChange>
                    <PercentChange>
                        <h3>Last 6 Hours</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_6h}%
                        </span>
                    </PercentChange>
                    <PercentChange>
                        <h3>Last 24 Hours</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_24h}%
                        </span>
                    </PercentChange>
                    <PercentChange>
                        <h3>Last 7 Days</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_7d}%
                        </span>
                    </PercentChange>
                    <PercentChange>
                        <h3>Last 30 Days</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_30d}%
                        </span>
                    </PercentChange>
                    <PercentChange>
                        <h3>Last 1 Years</h3>
                        <span>
                            {data && data.quotes.USD.percent_change_1y}%
                        </span>
                    </PercentChange>
                </Container>

            }
        </>
    )
}

export default Price;