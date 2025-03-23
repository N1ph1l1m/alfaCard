import styles from "../../App/Styles/ProductItem.module.css";
import { Favorites } from "./Favorites/Favotires";

interface IProductItem {
  images: string;
  title: string;
  description: string;
  price: number;
}
export const ProductItem = ({
  images,
  title,
  description,
  price,
  onClick,
  isLike,
}: IProductItem) => {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.borderCard}>
        <div className={styles.wrapImg}>
          <img src={images} className={styles.imgItem} />
        </div>

        <p className={styles.titleCard}>{title}</p>
        <span className={styles.descriptionCard}>{description}</span>
        <span className={styles.readMore}>Read more</span>
        <div className={styles.wrapPrice}>
          <div>
            <p className={styles.priceTitle}>Price</p>
            <p>{price} $</p>
          </div>

          <Favorites onClick={onClick} isLike={isLike} />
        </div>
      </div>
    </div>
  );
};
