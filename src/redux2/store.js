import { configureStore } from '@reduxjs/toolkit'
import userReducer, { setActiveUser } from './userSlice/userSlice'
import productsReducer, { productsFetch } from './productsSlices/productsSlices'
import { productsApi } from './productsApi/productsApi';
import cartReducer, { getTotals } from './cartSlice/cartSlice';
import orderReducer, { addOrders } from './orderSlice/orderSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        orders: orderReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch())
store.dispatch(getTotals())
store.dispatch(addOrders())
store.dispatch(setActiveUser())

export default store