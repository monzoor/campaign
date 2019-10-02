import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import TableView from './TableView';

const Header = () => (
    <Row className="text-center my-5">
        <Col xs="12">
            <h1>KUL - F-E Homework</h1>
        </Col>
    </Row>
);

const Home = () => (
    <Container>
        <Header />
        <TableView />
    </Container>
);

export default Home;
