import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import styled from 'styled-components';

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

interface CoinInterface {
    description?: string;
}

function Coin() {
    const { coinID } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData ] = useState<CoinInterface>({});
    console.log(data)
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        })();
    }, [])

    return (
        <Container>
            <Header>
                <Title>{coinID}</Title>
            </Header>
            {loading ?
                (<Loader><img src="/Spinner.gif" alt="loading" /></Loader>)
                : (
                    <div>
                        <p>{data.description}</p>
                    </div>
                )
            }
        </Container> 
    )
}

export default Coin;