import React from 'react';
import Logo from '../../images/onlineBazarLogo.jpg';
import './Header.css';
const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container d-flex">
                    <div className='justify-content-start'>
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="" className='img-fluid' width="50px" height="50px" />
                            Online Bazar
                        </a>
                        

                    </div>

                    <div className='justify-content-end'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/Shop">Shop</a>
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
                </div>

            </nav>
        </div>
    );
};

export default Header;