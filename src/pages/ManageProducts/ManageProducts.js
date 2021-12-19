import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProductDetails from './ManageProduct';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <div>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((product, idx) => <ManageProductDetails key={product._id} number={idx} product={product}></ManageProductDetails>)}


                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;