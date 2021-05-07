import React from 'react';

function Header() {
    return (
        <div className='container'>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use href="#bootstrap"/>
                    </svg>
                    <span className="fs-4">Desafio FullStack</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active">Person</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Card</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Transfer</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;