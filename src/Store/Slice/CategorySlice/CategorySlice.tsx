import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct{
    title: string;
    images: string[];
    description: string;
    price: number;
}

interface IProductMenu{
   name:string
}


interface ICategory{
    typeCategory:string;
    category:IProduct[] ;
    menuCategory:IProductMenu[];

}

const initialState:ICategory = {
        typeCategory:"shoes",
        category:[],
        menuCategory:[], 
}

const categorySlice   = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategoryState(state,actions:PayloadAction<IProduct[]>){
            state.category = actions.payload;
        },
        setCategoryType(state,actions:PayloadAction<string>){
            console.log(state.category)
            state.typeCategory = actions.payload;
        },
        setMenuCategory(state,actions:PayloadAction<IProductMenu[]>){
            state.menuCategory = actions.payload
        }

    }

})
export const {setCategoryState,setCategoryType ,setMenuCategory} = categorySlice.actions
export default categorySlice.reducer;
