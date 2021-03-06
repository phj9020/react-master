import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled  from 'styled-components';
import { fetchCoins } from '../api';
import { isDarkAtom } from '../atoms';

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

const CoinList = styled.ul``;

const Coin = styled.li`
    border: 1px solid ${props => props.theme.cardColor};
    color: ${props => props.theme.textColor};
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

const CoinWrapper = styled.div`
    display: flex;
    align-items: center;
`
const Index = styled.span``;

const Symbol = styled.img`
    width: 30px;
    height: 30px;
    margin: 0px 10px;
`


const Title = styled.h1`
    font-size: 48px;
    color : ${props => props.theme.accentColor}
`

interface ICoins {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}



function Coins() {
    const {isLoading, data} = useQuery<ICoins[]>('allCoins', fetchCoins);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleTheme = () => setDarkAtom(prev => !prev);
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>코인베이스</title>
            </Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleTheme}>Theme Mode</button>
            </Header>
            {isLoading ? 
                (<Loader><img src="/Spinner.gif" alt="loading" /></Loader>)
                : 
                (<CoinList>
                    {data && data.slice(0,100).map((coin, index) =>
                        <Coin key={coin.id}>
                            <Link to={coin.id}>
                                <CoinWrapper>
                                    <Index>{index + 1}.</Index>
                                    <Symbol src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                    {coin.name} &rarr;
                                </CoinWrapper>
                            </Link>
                        </Coin>
                    )}
                </CoinList>)
            }
        </Container >
    )
}

export default Coins;