import React from 'react'
import { Container } from './Jumbotron.style';

const Jumbotron = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Jumbotron;
