import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Table, Badge } from 'reactstrap';
import moment from 'moment';
import { formatToUnits } from '../../Utils/UnitFormatter';

const demoData = [
    {
        id: 1,
        name: 'Divavu',
        startDate: '9/19/2017',
        endDate: '3/9/2020',
        Budget: 88377
    },
    {
        id: 2,
        name: 'Jaxspan',
        startDate: '11/21/2017',
        endDate: '2/21/2018',
        Budget: 608715
    },
    {
        id: 3,
        name: 'Miboo',
        startDate: '11/1/2017',
        endDate: '6/20/2017',
        Budget: 239507
    },
    {
        id: 4,
        name: 'Trilith',
        startDate: '8/25/2017',
        endDate: '11/30/2017',
        Budget: 179838
    },
    {
        id: 5,
        name: 'Layo',
        startDate: '11/28/2017',
        endDate: '3/10/2018',
        Budget: 837850
    },
    {
        id: 6,
        name: 'Photojam',
        startDate: '7/25/2017',
        endDate: '6/23/2017',
        Budget: 858131
    }
];

const currentTime = moment(new Date(), 'MM/DD/YYYY');
const TableHeader = () => (
    <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Active</th>
        <th>Budget</th>
    </tr>
);

const Home = () => {
    const momoHeader = useMemo(() => <TableHeader />, []);
    const [noDataFound, setnoDataFound] = useState(true);
    useEffect(() => {
        if (demoData.length) {
            setnoDataFound(false);
        }
    }, []);

    return (
        <Container>
            <Row className="text-center my-5">
                <Col xs="12">
                    <h1>KUL - F-E Homework</h1>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <Table>
                        <thead>{momoHeader}</thead>
                        <tbody>
                            {noDataFound ? (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No Data
                                    </td>
                                </tr>
                            ) : (
                                demoData.map(item => {
                                    console.log('--');
                                    const startDate = moment(
                                        item.startDate,
                                        'MM/DD/YYYY'
                                    );
                                    const endDate = moment(
                                        item.endDate,
                                        'MM/DD/YYYY'
                                    );
                                    const inRange = currentTime.isBetween(
                                        startDate,
                                        endDate
                                    );
                                    return (
                                        <tr key={item.id}>
                                            <th scope="row">{item.name}</th>
                                            <td>{item.startDate}</td>
                                            <td>{item.endDate}</td>
                                            <td>
                                                <Badge
                                                    color={
                                                        inRange
                                                            ? 'success'
                                                            : 'danger'
                                                    }
                                                    pill
                                                >
                                                    &nbsp;
                                                </Badge>
                                                <span className="ml-2">
                                                    {inRange
                                                        ? 'Active'
                                                        : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                {formatToUnits(item.Budget, 1)}
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
