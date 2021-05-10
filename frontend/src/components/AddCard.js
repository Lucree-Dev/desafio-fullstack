import React from 'react';
import api from "../services/api";
import {useHistory} from "react-router-dom"
import CardForm from "./CardForm";


const AddCard = () => {
    let history =  useHistory()
    const handleOnSubmit = (card) => {
        const response = api.post("account/card", card);
        history.push("/account/cards")
    };
    return (
        <React.Fragment>
            <CardForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
};

export default AddCard;