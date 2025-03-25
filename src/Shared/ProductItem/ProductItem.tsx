import { ChangeEventHandler } from "react";
import styles from "../../App/Styles/ProductItem.module.css";
import { Favorites } from "../Favorites/Favotires";
import { Link } from "react-router";

interface IProductItem {
  images: string;
  title: string;
  description: string;
  price: number;
  link:string,
  onClick:ChangeEventHandler<HTMLInputElement>,
  isLike:boolean,
}
export const ProductItem = ({
  images,
  title,
  description,
  price,
  onClick,
  isLike,
  link,
}: IProductItem) => {
  return (
    <div className={styles.wrapItem}>

      <div className={styles.borderCard}>
        <Link to={link}>
        <div className={styles.wrapImg}>
          <img src={images} className={styles.imgItem} />
        </div>


        <p className={styles.titleCard}>{title}</p>
        <span className={styles.descriptionCard}>{description}</span>

        <span className={styles.readMore}>Read more</span>
        </Link>
        <div className={styles.wrapPrice}>
        <Link  to={link}>
        <div>
            <p className={styles.priceTitle}>Price</p>
            <p className={styles.price}>{price} $</p>
          </div>
        </Link>


          <Favorites onClick={onClick} isLike={isLike} />
        </div>
      </div>
    </div>
  );
};
