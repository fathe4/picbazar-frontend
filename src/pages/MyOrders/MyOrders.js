import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const user = useSelector(state => state.user)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5001/dashboard/orders?email=${user.userEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.userEmail])

    console.log(orders, user);

    return (
        <div>
            <h2>My Orders {orders.length} </h2>
            {
                orders.map((order, idx) => <h2>hi{order.id}</h2>)
            }


        </div>
    );
};

export default MyOrders;