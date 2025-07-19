import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: "Card",
    initialState: [],
    reducers: {
        add: () => { },
        remove: () => { }
    }
});


export const { add, remove } = CardSlice.actions;

export default CardSlice.reducer;