import styles from  "../../App/Styles/MainPage.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Services/getApiData";
import { RootState } from "../../Store";
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import Loader from "../../Shared/Loader/Loader";


export const MainPage = () => {
    const shop  = useSelector((state:RootState)=>state.shopSlice.shopState)

    const dispatch = useDispatch();
    useEffect(() => {
        if(shop && shop.length===0){
            getData(dispatch);
        }


  }, []);

  const renderItems = () =>{
    if(shop && shop.length!==0 ){
        return(<>
            {shop.payload.map((item,index) => (
          <ProductItem
            key={index}
            title={item.title}
            img={item.images}
            description={item.description}
            price={item.price}
          />
        ))}</>)
    }else{
      return(  <Loader/>)
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
