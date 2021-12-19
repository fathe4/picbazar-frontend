import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetAllProductsQuery } from '../../redux2/productsApi/productsApi';
import Product from '../Product/Product';

const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {isLoading ? (
                        <p>Loading....</p>
                    ) : error ? (
                        <p>An error occured</p>
                    ) : (data.map(product => <Product key={product.id} product={product}></Product>))}

                </Row>
            </Container>
        </div>
    );
};

export default Products;