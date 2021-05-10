import React from 'react';
import PersonForm from './PersonForm';
import api from "../services/api";
import { useHistory } from "react-router-dom"


const AddPerson = () => {
    let history =  useHistory()
    const handleOnSubmit = (person) => {
        const response = api.post("account/person", person);
        history.push("/person")
    };
    return (
        <React.Fragment>
            <PersonForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
};

export default AddPerson;