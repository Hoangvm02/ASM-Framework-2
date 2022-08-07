import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../pages/users/cart/CartSlie';
const CartRedux = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default CartRedux;