import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalCount: 0,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.totalCount += 1;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                state.totalCount -= item.count;
                state.totalPrice -= item.price * item.count;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        incrementItemCount: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.count += 1;
                state.totalCount += 1;
                state.totalPrice += item.price;
            }
        },
        decrementItemCount: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && item.count > 1) {
                item.count -= 1;
                state.totalCount -= 1;
                state.totalPrice -= item.price;
            } else if (item && item.count === 1) {
                state.totalCount -= 1;
                state.totalPrice -= item.price;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
    },
})

export const {addItem, removeItem, incrementItemCount, decrementItemCount, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
