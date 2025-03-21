import { useEffect } from "react";
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { Categories } from "../../Shared/ProductItem/Categories/Categories";
import { RootState } from "../../Store";
import { getCategories } from "../../Services/getApiData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Shared/Loader/Loader";
import styles from "../../App/Styles/Products.module.css";

export const Products = () => {
  const { category, typeCategory } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();

  const list = ["Clothes", "Electronics", "Shoes"];

  useEffect(() => {

    if (category && category.length === 0) {
      getCategories(dispatch, typeCategory);
    }
  }, []);

  useEffect(() => {
    getCategories(dispatch, typeCategory);
  }, [typeCategory]);

  const renderItems = () => {
    if (category && Array.isArray(category.payload) && category.payload.length !== 0) {
      return (
        <>
          {category.payload.map((item, index) => (
            <ProductItem
              key={index}
              title={item.title}
              img={item.images}
              description={item.description}
              price={item.price}
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
        <Categories list={list} active={typeCategory} />
      </div>
    </div>
  );
};
