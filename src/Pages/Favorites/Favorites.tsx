import styles from  "../../App/Styles/MainPage.module.css"
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { setFavoriteState } from "../../Store/Slice/ShopSlice/ShopSlice";
import { RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
export const Favorites = () => {
    const dispatch = useDispatch();
    const shopState  = useSelector((state:RootState)=>state.shopSlice.shopState)
    const category = useSelector((state:RootState)=>state.categorySlice.category)
    
    const renderItems = () =>{
        if(shopState && shopState.length!==0 ){
            return(<>
           {[...shopState, ...category]
  .filter((item) => item.favorite === true)
  .map((item, index) => (
    <ProductItem
      key={index}
      title={item.title}
      images={item.images[0]}
      description={item.description}
      price={item.price}
      onClick={() => dispatch(setFavoriteState(item.id))}
      isLike={item.favorite}
    />
  ))}
            </>)
        }else{
          return(  <p>The list of favorite cards is empty </p>)
        }
      }

    return (
        <div className={styles.mainPageWrap}>
        <div className={styles.wrapContent}>
         {renderItems()}

        </div>

     </div>
    );
};
