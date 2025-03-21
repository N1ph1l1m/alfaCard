import styles from "../../App/Styles/ProductItem.module.css";
import { Favorites } from "./Favorites/Favotires";

interface IProductItem {
  img: string;
  title: string;
  description: string;
  price: number;
}
export const ProductItem = ({
  img,
  title,
  description,
  price,
}: IProductItem) => {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.borderCard}>
        <div className={styles.wrapImg}>
          <img src={img} className={styles.imgItem} />
        </div>

        <p className={styles.titleCard}>{title}</p>
        <span className={styles.descriptionCard}>{description}</span>
        <span className={styles.readMore}>Read more</span>
        <div className={styles.wrapPrice}>
          <div>
            <p className={styles.priceTitle}>Price</p>
            <p>{price} $</p>
          </div>

          <Favorites />
        </div>
      </div>
    </div>
  );
};
