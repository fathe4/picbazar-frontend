import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrders(state, action) {
            state.orders.push({ ...action.payload })
        }
    }
});

export const { addOrders } = orderSlice.actions
export default orderSlice.reducer