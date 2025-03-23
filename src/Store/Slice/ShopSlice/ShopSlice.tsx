import { createSlice ,  PayloadAction} from "@reduxjs/toolkit";


interface IProductItem {
    id:number,
    images: string;
    title: string;
    description: string;
    price: number;
    favorite:boolean;
  }
interface IShopSlice{
    shopState:IProductItem[],
    favoriresState:never[],
}
  const initialState:IShopSlice={
    shopState:[],
    favoriresState:[],
  }

const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setShopState(state, actions: PayloadAction<Omit<IProductItem, "favorite">[]>) {
            state.shopState = actions.payload.map(item => ({
                ...item,
                favorite: false
            }));
        },
     
          setFavoriteState(state,actions: PayloadAction<number>) {
            const product = state.shopState.find(item => item.id === actions.payload);
            if (product) {
                product.favorite = !product.favorite; 
            }
          },
    }
})
export const {setShopState,setFavoriteState} = shopSlice.actions
export default shopSlice.reducer;
