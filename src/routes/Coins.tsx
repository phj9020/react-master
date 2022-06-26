import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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


const coins = [
    {
        id: "btc-bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin"
    },
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "eth",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin"
    },
    {
        id: "hex-hex",
        name: "hex",
        symbol: "hex",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "token"
    },
]

function Coins() {
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinList>
                {coins.map(coin =>
                    <Coin key={coin.id}>
                        <Link to={coin.id}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                )}
            </CoinList>
        </Container >
    )
}

export default Coins;