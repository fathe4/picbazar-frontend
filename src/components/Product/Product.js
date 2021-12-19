import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useGetAllProductsQuery } from '../../redux2/productsApi/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux2/cartSlice/cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img width={250} height={200} variant="top" src={product.url} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description.slice(0, 200)}...
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <h5 className="price">${product.price}</h5>
                            <Button variant="primary" onClick={() => handleAddToCart(product)}>+</Button>
                        </div>


                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;