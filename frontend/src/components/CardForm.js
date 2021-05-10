import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const CardForm = (props) => {
    const [card, setCard] = useState({
        title: props.card ? props.card.title : '',
        pan: props.card ? props.card.pan : '',
        expiry_mm: props.card ? props.card.expiry_mm : '',
        expiry_yyyy: props.card ? props.card.expiry_yyyy : '',
        security_code: props.card ? props.card.security_code : '',
        date: props.card ? props.card.date : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { title, pan, expiry_mm, expiry_yyyy, security_code, date } = card;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [title, pan, expiry_mm, expiry_yyyy, security_code, date];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const card = {
                title,
                pan,
                expiry_mm,
                expiry_yyyy,
                security_code,
                date,
            };
            props.handleOnSubmit(card);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            default:
                setCard((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form container">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <h2>Add Card</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Enter title"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="pan">
                    <Form.Label>Pan</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="pan"
                        value={pan}
                        placeholder="Enter Pan"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="expiry_mm">
                    <Form.Label>Expiry Month</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="expiry_mm"
                        value={expiry_mm}
                        placeholder="Enter Expire Month"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="expiry_yyyy">
                    <Form.Label>Expiry year</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="expiry_yyyy"
                        value={expiry_yyyy}
                        placeholder="Enter Expiry month"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="security_code">
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="security_code"
                        value={security_code}
                        placeholder="Enter Security code"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="date"
                        value={date}
                        placeholder="Enter date"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CardForm;