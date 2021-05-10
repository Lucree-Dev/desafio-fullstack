import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Desafio Full Stack</span>
                </div>
                <ul className="navbar-nav">
                    <NavLink to="/person" className="nav-link" activeClassName="active" exact>
                        Person
                    </NavLink>
                    <NavLink to="/account/cards" className="nav-link" activeClassName="active">
                        Cards
                    </NavLink>
                    <NavLink to="/account/tranfers" className="nav-link" activeClassName="active">
                        Transfer
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;