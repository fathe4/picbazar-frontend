import React, { useEffect } from 'react';
import './cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseQuantity, getTotals, removeItem } from '../../redux2/cartSlice/cartSlice';
import StripeCheckout from 'react-stripe-checkout';
import { addOrders } from '../../redux2/orderSlice/orderSlice';
import { selectUserEmail } from '../../redux2/userSlice/userSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)



    const dispatch = useDispatch()
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }


    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item))
    }
    const handleIncreaseQuantity = (item) => {
        dispatch(addToCart(item))
    }
    useEffect(() => dispatch(getTotals()), [cart, dispatch])

    const handleToken = (token, address) => {
        console.log(token, address);
        const newOrder = { ...cart.cartItems, email: user.userEmail }
        handlePlaceOrder(newOrder)
        dispatch(addOrders(newOrder))

    }


    console.log(cart.cartItems);

    const handlePlaceOrder = (orderDetails) => {
        fetch('http://localhost:5001/dashboard/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully added')
                }
            })
        console.log(orderDetails);


    }


    return (
        <div>
            <div className="cart-container">
                <h2>Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <>
                        <p>Your cart is currently empty</p>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span>Back to shopping</span>

                        </Link>
                    </>
                ) : (<div>


                    <div class="shopping-cart">

                        <div class="column-labels">
                            <label class="product-image">Image</label>
                            <label class="product-details">Product</label>
                            <label class="product-price">Price</label>
                            <label class="product-quantity">Quantity</label>
                            <label class="product-removal">Remove</label>
                            <label class="product-line-price">Total</label>
                        </div>

                        {cart?.cartItems?.map(item => (
                            <>
                                <div class="product">
                                    <div class="product-image">
                                        <img src={item.url} alt='' />
                                    </div>
                                    <div class="product-details">
                                        <div class="product-title">{item.title}</div>
                                        <p class="product-description">{item.description.slice(0, 30)}</p>
                                    </div>
                                    <div class="product-price">{item.price}</div>
                                    <div class="product-quantity">
                                        {/* <input type="number" defaultValue={item.cartQuantity} min="1" /> */}
                                        <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                        <div className="quantity">{item.cartQuantity}</div>
                                        <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                                    </div>
                                    <div class="product-removal">
                                        <button class="remove-product" onClick={() => handleRemoveItem(item)}>
                                            Remove
                                        </button>
                                    </div>
                                    <div class="product-line-price">{item.price * item.cartQuantity}</div>
                                </div>
                            </>
                        ))}

                        <div class="totals">
                            <div class="totals-item">
                                <label>Subtotal</label>
                                <div class="totals-value" id="cart-subtotal">{cart.cartTotalAmount}</div>
                            </div>
                            <div class="totals-item">
                                <label>Tax (0%)</label>
                                <div class="totals-value" id="cart-tax">0</div>
                            </div>
                            <div class="totals-item">
                                <label>Shipping</label>
                                <div class="totals-value" id="cart-shipping">0</div>
                            </div>
                            <div class="totals-item totals-item-total">
                                <label>Grand Total</label>
                                <div class="totals-value" id="cart-total">{cart.cartTotalAmount}</div>
                            </div>
                        </div>

                        {/* <button class="checkout">Checkout</button> */}
                        <StripeCheckout
                            token={handleToken}
                            // onClick={() => handleOrders(cart.cartItems)}
                            stripeKey="pk_test_KgaIBFneeLYYJnvovSnTw9dU00TkTPc6K9"
                            billingAddress
                            shippingAddress
                            amount={cart.cartTotalAmount * 100}
                        ></StripeCheckout>

                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default Cart;