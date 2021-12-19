import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.title} quantity increased`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProducts = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProducts)
                toast.success(`${action.payload.title}  added to cart`, {
                    position: 'bottom-left'
                })

            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeItem(state, action) {
            const newItems = state.cartItems.filter(item => item._id !== action.payload._id)
            state.cartItems = newItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            toast.error(`${action.payload.title}  removed from cart`, {
                position: 'bottom-left'
            })
        },
        decreaseQuantity(state, action) {
            const cartIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );

            if (state.cartItems[cartIndex].cartQuantity > 1) {
                state.cartItems[cartIndex].cartQuantity -= 1
                toast.info("Decreased product quantity", {
                    position: "bottom-left",
                });
            } else if (state.cartItems[cartIndex].cartQuantity === 1) {
                let nextCartItems = state.cartItems.filter(item => item._id !== action.payload._id)
                state.cartItems = nextCartItems
                toast.error("Product removed from cart", {
                    position: "bottom-left",
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error("cart clear", {
                position: "bottom-left",
            });
        }

    }
});

export const { addToCart, removeItem, decreaseQuantity, getTotals, clearCart } = cartSlice.actions
export default cartSlice.reducer