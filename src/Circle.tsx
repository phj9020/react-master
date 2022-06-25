import React, { useState } from 'react';
import styled from "styled-components";


interface ContainerProps {
    bgColor: string;
    borderColor? : string;
    text? : string;
}

const Container = styled.div<ContainerProps>`
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    border-color : ${(props) => props.borderColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;


function Circle({bgColor, borderColor, text = "default"} : ContainerProps) {
    const [count, setCount] = useState(1);

    const increment = (count: number)  => {
        setCount(count += 1);
    }

    const decrement = (count: number) => {
        setCount(count -= 1);
    }

    return (
        <Container bgColor={bgColor} borderColor={borderColor} >
            <button onClick={()=> decrement(count)}>-</button>
            {count}
            <button onClick={()=> increment(count)}>+</button>
        </Container>
            
    )
}

export default Circle;
