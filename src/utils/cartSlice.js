import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
    const existingItem = state.items.find(
    item => item.info.id === action.payload.info.id
    );

    if (existingItem) {
    existingItem.quantity += 1;
    } else {
    state.items.push({
      ...action.payload,
      quantity: 1
    });
    }
    // state.totalAmount += action.payload.info.price / 100;
},

        removeItemFromCart: (state, action) => {
  const index = state.items.findIndex(
    item => item.info.id === action.payload
  );

  if (index !== -1) {
    if (state.items[index].quantity > 1) {
      state.items[index].quantity -= 1;
    } else {
      state.items.splice(index, 1);
    }
  }
},

        removeAllItemsFromCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        }
    }
});

export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;