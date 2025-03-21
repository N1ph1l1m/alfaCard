import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name:"shop",
    initialState:{
        shopState:[],
    },
    reducers:{
        setShopState(state,action){
            state.shopState = action;
        }
    }
})
export const {setShopState} = shopSlice.actions
export default shopSlice.reducer;
