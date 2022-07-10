import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams } from './Coin';
import { useQuery } from 'react-query';
import { fetchChartInfo } from '../api';
import ApexChart from "react-apexcharts";
import styled  from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './../atoms';

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:20vh;
    
    img {
        width: 50px;
    }
`

interface IChartData {
    time_open: number;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}



function Chart(){
    const {coinID} = useParams<IParams>();
    const {isLoading, data} = useQuery<IChartData[]>('highLowValue', ()=> fetchChartInfo(coinID!))
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <div>{isLoading ? <Loader><img src="/Spinner.gif" alt="loading" /></Loader> : 
            <ApexChart type="line"
            series={[
                {
                    name: "Price_close",
                    data: data!.map(price => price.close)
                },
            ]}
            options={{
                theme: {
                    mode: isDark ? "dark" : "light"
                },
                chart : {
                    height: 500, 
                    width: 500,
                    background: 'transparent',
                    toolbar: {
                        show: false
                    }
                },
                stroke : {
                    curve: 'smooth',
                    width: 2
                },
                fill : {
                    type: "gradient", 
                    gradient: {
                        gradientToColors : ["#301f1c"],
                        stops: [0, 100]
                    },
                },
                tooltip: {
                    y: {
                        formatter: (value) =>`$${value.toFixed(0)}`
                    }
                },
                xaxis: {
                    type: "datetime",
                    categories: data!.map(t => t.time_close * 1000)
                },
                colors: ["#FF416C"],
            }} 
            />}
        </div>
    )
}

export default Chart;