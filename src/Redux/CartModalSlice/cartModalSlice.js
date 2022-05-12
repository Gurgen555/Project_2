import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const cartModalSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {

        setModal: (state) => {
            state.modal = true
        },
        closeModal: (state) => {
            state.modal = false
        },
        addItemToCard: (state, actions) => {

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === actions.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...actions.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },

        minusProd: (state, actions) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === actions.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {

                state.cartItems[itemIndex].cartQuantity -= 1

            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== actions.payload.id
                );

                state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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



    }
})


export const getCartItem = (state) => state.cart.cartItems

export const selectModal = (state) => state.cart.modal
export const { setModal, closeModal, addItemToCard, minusProd, getTotals } = cartModalSlice.actions

export default cartModalSlice.reducer