import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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

const Index = styled.span`
    display: inline-block;
    margin-right: 5px;
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

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom : 10px;
    border-radius: 10px;
    a {
        padding: 20px;
        display: block;
        transition : color 300ms ease-out;
    }
    &:hover {
        a {
            color : ${props => props.theme.accentColor};
        }
        cursor: pointer;
    }
    
`;


const Title = styled.h1`
    font-size: 48px;
    color : ${props => props.theme.accentColor}
`

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}


function Coins() {
    const [coins, setCoins] =useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        (async () => {
            const response = await fetch('https://api.coinpaprika.com/v1/coins');
            const json = await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();
    },[])

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? 
                (<Loader><img src="/Spinner.gif" alt="loading" /></Loader>)
                : 
                (<CoinList>
                    {coins.map((coin, index) =>
                        <Coin key={coin.id}>
                            <Link to={coin.id}>
                                <Index>{index + 1}.</Index>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    )}
                </CoinList>)
            }
        </Container >
    )
}

export default Coins;