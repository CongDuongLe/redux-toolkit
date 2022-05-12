import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import {actionCreator} from '../actions/action'

const initialState = { 
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: true,
};
const removeItems = (state, action) => {
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //clearCart
        clearCart: (state) => {
            state.cartItems = [];
          },
        // remove item by id by using filter
        removeItem : (state, action ) => {
            removeItems(state, action)
        },
        // increase amount by find the id and increase each id amount by 1
        increaseAmount: (state, action) => {
            state.cartItems.find((item) => {
                if (item.id === action.payload) {
                    item.amount++;
                }})
        },
        // decrease amount by find the id and decrease each id amount by 1
        decreaseAmount: (state, action) => {
            state.cartItems.find((item) => {
                if (item.id === action.payload) {
                    item.amount--;
                }
                // checking if amount each id ===0 then remove items from state.cartItems
                if (item.amount === 0) {
                    removeItems(state, action)
                }
            })
        },
        // calculate total amount by using js reduce and update amount in state.cartItems
        calculateTotal: (state) => {
            state.total = state.cartItems.reduce((total, item) => {
                return total + item.amount * item.price;
            }
            , 0);
            // for amount in state.cartItems
            state.amount = state.cartItems.reduce((total, item) => {
                return total + item.amount;
            }
            , 0);
        }
    }
});
 // export all cart action 
    export const { clearCart, increaseAmount,removeItem, decreaseAmount, calculateTotal} = cartSlice.actions;

    export default cartSlice.reducer;