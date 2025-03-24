import styles from  "../../App/Styles/MainPage.module.css"
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { setFavoriteState } from "../../Store/Slice/ShopSlice/ShopSlice";
import { RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "../../Shared/Notification/Notification";
export const Favorites = () => {
    const dispatch = useDispatch();
    const shopState  = useSelector((state:RootState)=>state.shopSlice.shopState)
    const category = useSelector((state:RootState)=>state.categorySlice.category)
    const favoiteCouunt  = shopState.filter(favorite=> favorite.favorite === true )
    const categoryCouunt  = category.filter(favorite=> favorite.favorite === true )




    const renderItems = () =>{

        if(favoiteCouunt && favoiteCouunt.length!==0  && categoryCouunt || categoryCouunt.length!==0  ){
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
          return(
          <Notification
          style={{margin:"100px auto"}}
            link={"/"}
              title="The list of favorite cards is empty"
             titleLink={"please go to the main menu and select the card"}/>
          )
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
