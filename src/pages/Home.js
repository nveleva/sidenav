import React from 'react';
import { Container } from 'mdbreact';

export default function Home() {
    return (
    <Container className="text-center mt-5">
        <h2>This Navbar is fixed</h2>
        <h5>It will always stay visible on the top, even when you scroll do </h5>
        <br />
        <p>Full page intro with background image will be always displayfull screen mode, regardless of device </p>
    </Container>);
}