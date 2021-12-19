import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navigation = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/"> <a className="nav-link active">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart"> <a className="nav-link">Cart {cartTotalQuantity}</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard"> <a className="nav-link">Dashboard</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login"> <a className="nav-link">Login</a></Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;