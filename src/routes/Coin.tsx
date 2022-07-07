import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet, useMatch, useParams, useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo, fetchPriceInfo } from '../api';
import {Helmet} from "react-helmet";

const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:20vh;
    
    img {
        width: 50px;
    }
`

const Title = styled.h1`
    font-size: 48px;
    color : ${props => props.theme.accentColor}
`
const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`

const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const Description = styled.p`
    margin: 20px 0px;
`;

const Tabs = styled.div`
    margin: 20px 0px;
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    gap: 10px;
    
`
const Tab = styled.div<{isActive: boolean}>`
    background-color:rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    text-align: center;
    text-transform: uppercase;
    font-size:12px;
    font-weight: 600;
    padding:10px 0px;
    border-radius: 8px;
    color: ${(props) => props.isActive ? props.theme.accentColor : props.theme.textColor};
    a {
        display: block;
    }
`
const BackBtn = styled.div`
    background-color:rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    text-align: center;
    text-transform: uppercase;
    font-size:12px;
    font-weight: 600;
    padding:10px 0px;
    border-radius: 8px;
    margin-bottom:10px;
    width: 100px;
    a {
        display: block;
    }
`

interface ITag {
    id: string;
    name: string;
    coin_counter: number;
    ico_counter: number;
}

interface IinfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    tags: ITag[];
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}



interface IpriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    }
}

export type IParams = {
    coinID: string;
}


function Coin() {
    const { coinID } = useParams<IParams>();
    const priceMatch = useMatch("/:coinID/price");
    const chartMatch = useMatch("/:coinID/chart");

    
    const {isLoading: infoLoading, data: infoData} = useQuery<IinfoData>(["info", coinID], () => fetchCoinInfo(coinID!));
    // refetchInterval : call API every 5sec 
    const {isLoading: tickersLoading, data: ticklersData} = useQuery<IpriceData>(["tickers", coinID], () => fetchPriceInfo(coinID!),
        {
            refetchInterval: 5000,
        });

    const loading = infoLoading || tickersLoading;

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{coinID} | 코인베이스</title>
            </Helmet>
            <Header>
            <Title>{coinID}</Title>
            </Header>
            {loading ?
                (<Loader><img src="/Spinner.gif" alt="loading" /></Loader>)
                : (
                    <>
                        <BackBtn>
                            <Link to={"/"} >Back</Link>
                        </BackBtn>
                        <Overview>
                            <OverviewItem>
                                <span>Rank:</span>
                                <span>{infoData && infoData.rank}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Symbol:</span>
                                <span>{infoData && infoData.symbol}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Price:</span>
                                <span>{infoData && ticklersData!.quotes.USD.price.toFixed(0)}</span>
                            </OverviewItem>
                        </Overview> 
                        <Description>{infoData && infoData.description}</Description>
                        <Overview>
                            <OverviewItem>
                                <span>Total Supply:</span>
                                <span>{ticklersData && ticklersData.total_supply}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Max  Supply:</span>
                                <span>{ticklersData && ticklersData.max_supply}</span>
                            </OverviewItem>
                        </Overview>
                        <Tabs>
                            <Tab isActive={chartMatch !== null}>
                                <Link to="chart">
                                    Chart
                                </Link>
                            </Tab>
                            <Tab isActive={priceMatch !== null}>
                                <Link to="price">
                                    Price
                                </Link>
                            </Tab>
                        </Tabs>
                        <Outlet />
                    </>
                )
            }
        </Container>
    )
}

export default Coin;