import { createSlice } from "@reduxjs/toolkit";


const categorySlice   = createSlice({
    name:'category',
    initialState:{
        typeCategory:"shoes" as string,
        category:[],
    },
    reducers:{
        setCategoryState(state,action){
            state.category = action;
        },
        setCategoryType(state,actions:PayloadAction<string>){
            console.log(state.category)
            state.typeCategory = actions.payload;
        }
    }

})
export const {setCategoryState,setCategoryType} = categorySlice.actions
export default categorySlice.reducer;
