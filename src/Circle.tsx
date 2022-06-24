import React from 'react';
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
`;


function Circle({bgColor, borderColor, text = "default"} : ContainerProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor} >
            {text}
        </Container>
            
    )
}

export default Circle;
