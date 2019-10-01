import React, { useMemo, useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Table,
    Badge,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input
} from 'reactstrap';
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
const Header = () => (
    <Row className="text-center my-5">
        <Col xs="12">
            <h1>KUL - F-E Homework</h1>
        </Col>
    </Row>
);
const TableHeader = () => (
    <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Active</th>
        <th>Budget</th>
    </tr>
);

const InputItems = ({ inputValues }) => {
    const [inputValue, setInputValue] = useState('');
    const searhInputValue = e => {
        setInputValue(e.target.value);
        inputValues(e.target.value);
    };
    return (
        <Row className="py-4">
            <Col xs="4"></Col>
            <Col xs="4"></Col>
            <Col xs="4">
                <InputGroup>
                    <Input value={inputValue} onChange={searhInputValue} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    );
};

const TableView = () => {
    const momoTableHeader = useMemo(() => <TableHeader />, []);
    const [noDataFound, setnoDataFound] = useState(true);
    const [currentData, setCurrentData] = useState(demoData);
    const searchInput = val => {
        const regexp = new RegExp(val, 'i');
        const filterItems = demoData.filter(x => regexp.test(x.name));
        // if (filterItems.length < -1)
        setCurrentData(filterItems);
    };
    useEffect(() => {
        console.log('====s====', currentData.length);
        if (currentData.length > 0) {
            setnoDataFound(false);
        } else {
            setnoDataFound(true);
        }
    }, [currentData]);
    return (
        <>
            <InputItems inputValues={searchInput} />
            <Row>
                <Col xs="12">
                    <Table>
                        <thead>{momoTableHeader}</thead>
                        <tbody>
                            {noDataFound ? (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No Data
                                    </td>
                                </tr>
                            ) : (
                                currentData.map(item => {
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
        </>
    );
};
const Home = () => {
    // const searchString = 'avu';
    // const regexp = new RegExp('avu', 'i');
    // const filterItems = demoData.filter(x => regexp.test(x.name));
    // console.log('====s====', filterItems);
    return (
        <Container>
            <Header />
            <TableView />
        </Container>
    );
};

export default Home;
