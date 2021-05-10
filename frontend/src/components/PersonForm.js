import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PersonForm = (props) => {
    const [person, setPerson] = useState({
        first_name: props.person ? props.person.first_name : '',
        last_name: props.person ? props.person.last_name : '',
        birthday: props.person ? props.person.birthday : '',
        password: props.person ? props.person.password : '',
        username: props.person ? props.person.username : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { first_name, last_name, birthday, password, username } = person;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [first_name, last_name, birthday, password,username];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const person = {
                first_name,
                last_name,
                birthday,
                password,
                username,
            };
            props.handleOnSubmit(person);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            default:
                setPerson((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form container">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <h2>Add Person</h2>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="first_name"
                        value={first_name}
                        placeholder="Enter first name"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="last_name">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="last_name"
                        value={last_name}
                        placeholder="Enter last name"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="birthday">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="birthday"
                        value={birthday}
                        placeholder="Enter birthday"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter username"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
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

export default PersonForm;