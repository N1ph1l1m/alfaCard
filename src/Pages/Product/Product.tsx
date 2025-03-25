import styles from "../../App/Styles/Product.module.css";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import Loader from "../../Shared/Loader/Loader";
interface ICategory {
  name: string;
}
interface IProduct {
  images: string | string[];
  title: string;
  description: string;
  name: string;
  price: string;
  category: ICategory;
}
export const Product = () => {
  const [productState, setProduct] = useState<IProduct | null>(null);
  const [imageMain, setImage] = useState("");
  const { title } = useParams();
  const TITLE = title?.slice(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!TITLE) return;
      const url = `https://api.escuelajs.co/api/v1/products/?title=${TITLE}`;

      try {
        const response = await axios.get(url);
        if (response.data.length > 0) {
          const productData = response.data[0];

          const imagesArray = Array.isArray(productData.images)
            ? productData.images
            : [productData.images];

          setProduct({ ...productData, images: imagesArray });
          setImage(imagesArray[0] || "");
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchProduct();
  }, [TITLE]);

  useEffect(() => {
    if (productState && productState.images.length > 0) {
      setImage(productState.images[0]);
    }
  }, [productState]);

  if (!productState) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapProduct}>
      <div className={styles.wrapHome}>
        {" "}
        <Link to="/">
          <button className={styles.buttonLink}>
            <FaHome />
            Home
          </button>
        </Link>
      </div>
      <div className={styles.wrapCard}>
        <div className={styles.wrapImage}>
          <div className={styles.wrapGalary}>
            {Array.isArray(productState.images) &&
              productState.images.map((img, index) => (
                <img
                  key={index}
                  className={styles.imagesGalary}
                  onClick={() => setImage(img)}
                  src={img}
                  alt={productState.title}
                />
              ))}
          </div>
          <img
            className={styles.imagesMain}
            src={imageMain}
            alt={
              Array.isArray(productState.images)
                ? productState.images[0]
                : productState.images
            }
          />
        </div>
        <div className={styles.wrapCardInfo}>
          <div className={styles.headerCardInfo}>
            <p className={styles.titleProduct}> {productState.title}</p>
            <p className={styles.categoryProduct}>
              {productState.category.name}
            </p>
          </div>

          <div className={styles.descriptionCardInfo}>
            <p className={styles.descriptionProduct}>
              {productState.description}
            </p>
          </div>

          <div className={styles.footerProduct}>
            <p className={styles.titleFooter}>Price:</p>
            <p className={styles.priceTitle}>$ {productState.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
