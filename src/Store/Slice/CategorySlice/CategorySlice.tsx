import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct{
    id:number,
    title: string;
    images: string[];
    description: string;
    price: number;
    favorite:boolean;
}

interface IProductMenu{
   name:string,
   id:number,
}


interface ICategory{
    typeCategory:string;
    category:IProduct[] ;
    menuCategory:IProductMenu[];

}

const initialState:ICategory = {
        typeCategory:"electronics",
        category:[],
        menuCategory:[], 
}

const categorySlice   = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategoryState(state,actions:PayloadAction<Omit<IProduct,"favorite">[]>){
            state.category = actions.payload.map(item=>({
                ...item,
                favorite:false
            }))
        },
        setCategoryType(state,actions:PayloadAction<string>){
            state.typeCategory = actions.payload;
        },
        setMenuCategory(state,actions:PayloadAction<IProductMenu[]>){
            state.menuCategory = actions.payload
        },
        setFavoriteCategoryState(state,actions: PayloadAction<number>) {
            const product = state.category.find(item => item.id === actions.payload);
            if (product) {
                product.favorite = !product.favorite; 
            }
          },

    }

})
export const {setCategoryState,setCategoryType ,setMenuCategory,setFavoriteCategoryState} = categorySlice.actions
export default categorySlice.reducer;
