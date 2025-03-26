import { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "../../App/Styles/ProductItem.module.css";
import { Favorites } from "../Favorites/Favotires";
import { Link } from "react-router";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

interface IProductItem {
  images: string;
  title: string;
  description: string;
  price: number;
  link?: string;
  onClick: ChangeEventHandler<HTMLInputElement>;
  deleteItem?: MouseEventHandler<SVGElement>;
  isLike: boolean;
}
export const ProductItem = ({
  images,
  title,
  description,
  price,
  onClick,
  deleteItem,
  isLike,
  link,
}: IProductItem) => {
  const [isTrachIcon, setTrashIcon] = useState(false);
  return (
    <div
      onMouseEnter={() => setTrashIcon(true)}
      onMouseLeave={() => setTrashIcon(false)}
      className={styles.wrapItem}
    >
      <div className={styles.borderCard}>
        <Link to={link || "/alfaCard/"}>
          <div className={styles.wrapImg}>
            <img src={images} className={styles.imgItem} />
          </div>

          <p className={styles.titleCard}>{title}</p>
          <span className={styles.descriptionCard}>{description}</span>

          <span className={styles.readMore}>Read more</span>
        </Link>
        <div className={styles.wrapPrice}>
          <Link to={link || "/alfaCard/"}>
            <div>
              <p className={styles.priceTitle}>Price</p>
              <p className={styles.price}>{price} $</p>
            </div>
          </Link>

          <div className={styles.wrapFavorite}>
            <FaRegTrashAlt
              onClick={deleteItem}
              style={{ display: isTrachIcon ? "block" : "none" }}
              className={styles.trash}
              size={20}
              color={"black"}
            />
            <Favorites onClick={onClick} isLike={isLike} />
          </div>
        </div>
      </div>
    </div>
  );
};
