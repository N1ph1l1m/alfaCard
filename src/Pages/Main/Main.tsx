import styles from  "../../App/Styles/MainPage.module.css"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Services/getApiData";
import { RootState } from "../../Store";
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { getMenuCategory , getCategories } from "../../Services/getApiData";
import { setFavoriteState , deleteItem} from "../../Store/Slice/ShopSlice/ShopSlice";

import Loader from "../../Shared/Loader/Loader";


export const MainPage = () => {
    const shop  = useSelector((state:RootState)=>state.shopSlice.shopState)
    const {menuCategory, category,typeCategory} = useSelector((state:RootState)=>state.categorySlice)

    const dispatch = useDispatch();
    useEffect(() => {
        if(shop && shop.length===0){
            getData(dispatch);
        }
        if(menuCategory.length === 0){
          getMenuCategory(dispatch)
        }
        if(category.length === 0){
          getCategories(dispatch, typeCategory)
        }

  }, []);

  const renderItems = () =>{
    if(shop && shop.length!==0 ){
        return(<>
            {shop.map((item,index) => (
          <ProductItem
            key={index}
            title={item.title}
            images={item.images[0]}
            description={item.description}
            price={item.price}
            onClick={()=>{dispatch(setFavoriteState(item.id))}}
            deleteItem={()=>{dispatch(deleteItem(item.id))}}
            isLike={item.favorite}
            link={`products/:${item.title}`}
          />
        ))}</>)
    }else{
      return(  <Loader/>)
    }
  }

    return (
           <div className={styles.wrapContent}>
            {renderItems()}
           </div>
    );
};
