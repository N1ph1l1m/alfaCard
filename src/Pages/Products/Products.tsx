
import styles from  "../../App/Styles/Products.module.css"
import { ProductItem } from "../../Shared/ProductItem/ProductItem";
export const Products = () => {
    return (
        <div className={styles.wrapProducts}>
                <ProductItem/>
                <ProductItem/>
        </div>
    );
};
