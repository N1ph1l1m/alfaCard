import axios from "axios";
import { setShopState } from "../Store/Slice/ShopSlice/ShopSlice";
import { setCategoryState,setMenuCategory} from "../Store/Slice/CategorySlice/CategorySlice";


export const getData = async (dispatch) => {
  const url = "https://api.escuelajs.co/api/v1/products";
  try {
    const response = await axios.get(url);
    dispatch(setShopState(response.data));
    console.log(response.status);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
};


export const getCategories = async (dispatch,category) => {
    console.log("get category")
    const url = `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`;
    try {
      const response = await axios.get(url);
      dispatch(setCategoryState (response.data));
      console.log(response.status);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };


  export const getMenuCategory = async (dispatch) => {
    console.log("get category")
    const url = `https://api.escuelajs.co/api/v1/categories`;
    try {
      const response = await axios.get(url);
      dispatch(setMenuCategory(response.data));
      console.log(response.status);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };
