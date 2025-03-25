import { useEffect, useRef, useState } from "react";
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
import { Categories } from "../../Shared/Categories/Categories";
import { RootState } from "../../Store";
import { getCategories, getMenuCategory } from "../../Services/getApiData";
import { setFavoriteCategoryState } from "../../Store/Slice/CategorySlice/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import { Notification } from "../../Shared/Notification/Notification";
import Loader from "../../Shared/Loader/Loader";
import styles from "../../App/Styles/Products.module.css";

export const Products = () => {
  const { category, typeCategory, menuCategory } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();
  const ref = useRef(typeCategory);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (category.length === 0) {
      getCategories(dispatch, typeCategory);
    }
    if (menuCategory.length === 0) {
      getMenuCategory(dispatch);
    }

  }, []);

  useEffect(() => {
    if (ref.current !== typeCategory) {
      getCategories(dispatch, typeCategory);
      ref.current = typeCategory;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [typeCategory]);

  const renderItems = () => {
    if (loading) {
      return <Loader />;
    }

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
              onClick={() => dispatch(setFavoriteCategoryState(item.id))}
              isLike={item.favorite}
              link={`:${item.title}`}
            />
          ))}
        </>
      );
    } else {
      return <Notification
      style={{margin:"100px auto"}}
       title={"The list of products is empty"}/>;
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
