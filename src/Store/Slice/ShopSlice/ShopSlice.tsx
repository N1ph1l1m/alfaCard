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
}
  const initialState:IShopSlice={
    shopState:[],
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
          deleteItem(state,actions:PayloadAction<number>) {
          const item = state.shopState.filter((item)=>item.id !== actions.payload )
          state.shopState = item;
          },
          createItem(state,action){
            state.shopState.push(action.payload)
          }
    }
})
export const {setShopState,setFavoriteState,deleteItem,createItem} = shopSlice.actions
export default shopSlice.reducer;
