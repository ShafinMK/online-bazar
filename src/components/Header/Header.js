import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>Hello from header</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/review">Order Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/inventory">Manage Inventory</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;