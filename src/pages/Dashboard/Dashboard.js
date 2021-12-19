import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import './Dashboard.css'

const Dashboard = () => {
    const location = useLocation()

    return (
        <div>
            <div class="wrapper">
                <input id="menu" type="checkbox" name="menu" />
                <label for="menu">Menu</label>
                <div class="sidebar">
                    <div class="logo">

                    </div>
                    <div class="menu">
                        <Link to={`/dashboard/myOrders`}>
                            <span className="links_name">My Orders</span>
                        </Link>
                        <Link to={`/dashboard/products`}>
                            <span className="links_name">Products</span>
                        </Link>
                        <Link to={`/dashboard/addProduct`}>
                            <span className="links_name">Add New Product</span>
                        </Link>

                    </div>
                    <div class="bottom">
                        <a href="">Go to Admin</a>
                    </div>
                </div>
                <div class="main">
                    <div class="topbar">
                        <h3>Dashboard</h3>
                        <div class="menu">
                            <a href="">Add New</a>
                        </div>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;