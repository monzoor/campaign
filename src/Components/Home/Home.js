/* eslint-disable no-unused-vars */
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
    Input,
    FormGroup
} from 'reactstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { formatToUnits } from '../../Utils/UnitFormatter';

const demoData = [
    {
        id: 0,
        name: 'Monzoor',
        startDate: '01/01/2020',
        endDate: '01/05/2020',
        Budget: 88377
    },
    {
        id: 1,
        name: 'Divavu',
        startDate: '9/19/2019',
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
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const searhInputValue = e => {
        setInputValue(e.target.value);
        inputValues({
            inputName: e.target.value,
            inputStartDate: startDate,
            inputEndDate: endDate
        });
    };
    useEffect(() => {
        if (startDate && endDate) {
            console.log('******');
            inputValues({
                inputName: inputValue,
                inputStartDate: startDate,
                inputEndDate: endDate
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate]);

    return (
        <Row className="py-4">
            <Col xs="4">
                <FormGroup>
                    <DatePicker
                        className="form-control"
                        placeholderText="Start Date"
                        selected={startDate}
                        selectsStart
                        dateFormat="MM/dd/yyyy"
                        onChange={date => setStartDate(date)}
                    />
                </FormGroup>
            </Col>
            <Col xs="4">
                <FormGroup>
                    <DatePicker
                        className="form-control"
                        placeholderText="End Date"
                        selected={endDate}
                        selectsEnd
                        dateFormat="MM/dd/yyyy"
                        onChange={date => setEndDate(date)}
                        disabled={!startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </FormGroup>
            </Col>
            <Col xs="4">
                <InputGroup>
                    <Input
                        value={inputValue}
                        onChange={searhInputValue}
                        placeholder="Search By Name"
                    />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    );
};

const TableView = () => {
    const dispatch = useDispatch();
    const momoTableHeader = useMemo(() => <TableHeader />, []);
    const currentUploadedData = useSelector(state => state.uploadedDatas.data);
    const [noDataFound, setnoDataFound] = useState(true);
    const [currentData, setCurrentData] = useState(currentUploadedData);
    const searchInputs = ({ inputName, inputStartDate, inputEndDate }) => {
        const regexp = new RegExp(inputName, 'i');
        const filterItems = currentUploadedData.filter(item => {
            if (inputStartDate && inputEndDate && inputName) {
                return (
                    moment(item.startDate, 'MM/DD/YYYY').isSameOrAfter(
                        inputStartDate,
                        'MM/DD/YYYY'
                    ) &&
                    moment(item.endDate, 'MM/DD/YYYY').isSameOrBefore(
                        inputEndDate,
                        'MM/DD/YYYY'
                    ) &&
                    regexp.test(item.name)
                );
            }
            if (inputStartDate && inputEndDate) {
                return (
                    moment(item.startDate, 'MM/DD/YYYY').isSameOrAfter(
                        inputStartDate,
                        'MM/DD/YYYY'
                    ) &&
                    moment(item.endDate, 'MM/DD/YYYY').isSameOrBefore(
                        inputEndDate,
                        'MM/DD/YYYY'
                    )
                );
            }
            return regexp.test(item.name);
        });
        setCurrentData(filterItems);
    };

    useEffect(() => {
        window.AddCampaigns = data => {
            if (Array.isArray(data)) {
                setnoDataFound(true);
                dispatch({
                    type: 'SELECTED_DATA',
                    data
                });
            }
        };
        if (
            currentUploadedData.length > 0 &&
            noDataFound &&
            currentUploadedData !== currentData
        ) {
            setCurrentData(currentUploadedData);
            setnoDataFound(false);
        }
        if (currentUploadedData.length === 0) {
            setnoDataFound(true);
        }
    }, [currentData, dispatch, currentUploadedData, noDataFound]);
    return (
        <>
            <InputItems inputValues={searchInputs} />
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
                                    // TODO: equal
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
const Home = () => (
    <Container>
        <Header />
        <TableView />
    </Container>
);

export default Home;
