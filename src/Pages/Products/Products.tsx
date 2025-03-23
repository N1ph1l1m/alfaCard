import { useEffect,useRef } from "react";
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { Categories } from "../../Shared/ProductItem/Categories/Categories";
import { RootState } from "../../Store";
import { getCategories } from "../../Services/getApiData";
import { setFavoriteCategoryState } from "../../Store/Slice/CategorySlice/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Shared/Loader/Loader";
import styles from "../../App/Styles/Products.module.css";

export const Products = () => {
  const { category, typeCategory , menuCategory } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();

  const ref  = useRef(typeCategory)

  useEffect(() => {

    if (category.length === 0) {
      console.log(category.length);
      getCategories(dispatch, typeCategory);
    }
  }, []);

  useEffect(() => {
    if(ref.current !== typeCategory) {
      getCategories(dispatch, typeCategory);
      ref.current = typeCategory;
    }else return 
  }, [typeCategory]);

  const renderItems = () => {
    if (category && Array.isArray(category) && category.length !== 0) {
      return (
        <>
          {category.map((item, index) => (
            <ProductItem
              key={index}
              title={item.title}
              images={item.images[0]}
              description={item.description}
              price={item.price}
              onClick={()=>{dispatch(setFavoriteCategoryState(item.id))}}
              isLike={item.favorite}
            />
          ))}
        </>
      );
    } else {
      return <Loader />;
    }
  };

  return (
    <div className={styles.wrapProducts}>
      <div className={styles.wrapContent}>{renderItems()}</div>
      <div className={styles.menuNav}>
        <Categories list={menuCategory} active={typeCategory} />
      </div>
    </div>
  );
};
