import { createSlice ,  PayloadAction} from "@reduxjs/toolkit";


interface IProductItem {
    images: string;
    title: string;
    description: string;
    price: number;
  }
interface IShopSlice{
    shopState:IProductItem[]
}
  const initialState:IShopSlice={
    shopState:[]
  }

const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setShopState(state,actions:PayloadAction<IProductItem[]>){
            state.shopState = actions.payload;
        }
    }
})
export const {setShopState} = shopSlice.actions
export default shopSlice.reducer;
