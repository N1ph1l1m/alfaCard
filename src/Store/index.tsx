import { configureStore } from "@reduxjs/toolkit"
import shopSlice from "../Store/Slice/ShopSlice/ShopSlice"
import categorySlice from "../Store/Slice/CategorySlice/CategorySlice"
const store = configureStore({
    reducer:{
        shopSlice:shopSlice,
        categorySlice:categorySlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
export default store;
