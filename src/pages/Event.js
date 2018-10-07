import React from 'react';
import { Container } from 'mdbreact';

export default function Event({ match }) {
    console.log(match);
    return (
    <Container className="text-center mt-5">
        <h2>This IS EVENTQ!!!</h2>
    </Container>);
}