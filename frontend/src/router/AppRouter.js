import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import AddPerson from "../components/AddPerson";
import App from "../App";
import CardPage from "../components/CardPage";
import AddCard from "../components/AddCard";
import TransferPage from "../components/TransferPage";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={App} path="/person" exact={true} />
                        <Route component={AddPerson} path="/person/add" />
                        <Route component={AddCard} path="/account/card/add" />
                        <Route component={CardPage} path="/account/cards" />
                        <Route component={TransferPage} path="/account/tranfers" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;