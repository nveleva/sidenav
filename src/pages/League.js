import React from 'react';
import { Container } from 'mdbreact';

export default function Home() {
    return (
    <Container className="content-wraper">
        <div>test league</div>
        <MainTable />
    </Container>);
}

class MainTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <table>
            <thead>
                <th>Date</th>
                <th>Teams</th>
                
            </thead>
        </table>
        );
    }
}