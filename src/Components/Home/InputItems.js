import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    FormGroup
} from 'reactstrap';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

const InputItems = ({ inputValues }) => {
    const currentUploadedData = useSelector(state => state.uploadedDatas.data);
    const [inputValue, setInputValue] = useState('');
    const [disabledAllinput, setDisabledAllInput] = useState(true);
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

    const handleDateChangeRaw = e => {
        e.preventDefault();
    };

    useEffect(() => {
        if (startDate && endDate) {
            inputValues({
                inputName: inputValue,
                inputStartDate: startDate,
                inputEndDate: endDate
            });
        } else {
            inputValues({
                inputName: inputValue
            });
        }
        if (currentUploadedData.length > 0) {
            setDisabledAllInput(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate, currentUploadedData]);

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
                        disabled={disabledAllinput}
                        isClearable
                        onChangeRaw={handleDateChangeRaw}
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
                        onChangeRaw={handleDateChangeRaw}
                        isClearable
                    />
                </FormGroup>
            </Col>
            <Col xs="4">
                <InputGroup>
                    <Input
                        value={inputValue}
                        onChange={searhInputValue}
                        placeholder="Search By Name"
                        disabled={disabledAllinput}
                    />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>Search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>
    );
};

export default InputItems;
