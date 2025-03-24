import styles from "../../App/Styles/Product.module.css";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
export const Product = () => {
    const [productState, setProduct] = useState(null);
    const [imageMain,setImage] = useState("")
    const { title } = useParams();
    const  TITLE =  title?.slice(1);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!title) return;
            const url = `https://api.escuelajs.co/api/v1/products/?title=${TITLE}`;

            try {
                const response = await axios.get(url);
                if (response.data.length > 0) {
                    setProduct(response.data[0]);

                } else {
                    setProduct(null);
                }
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        fetchProduct();

        console.log(imageMain);
    }, [TITLE]);

    useEffect(() => {
        if (productState && productState.images.length > 0) {
            setImage(productState.images[0]);
        }
    }, [productState]);


    if (!productState) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.wrapProduct}>
            <div className={styles.wrapHome}>  <Link to="/"><button className={styles.buttonLink}><FaHome/>Home</button></Link></div>
           <div className={styles.wrapCard}>
           <div className={styles.wrapImage}>
                <div className={styles.wrapGalary}>
                     {productState.images.map((img)=>(
                       <img className={styles.imagesGalary} onClick={()=>setImage(img)} src={img} alt={productState.images} />
                    ))
                }
                </div>
                <img className={styles.imagesMain} src={imageMain} alt={productState.images} />


            </div>
            <div className={styles.wrapCardInfo}>
                <div className={styles.headerCardInfo}>
                <p className={styles.titleProduct}> {productState.title}</p>
                <p className={styles.categoryProduct}>{productState.category.name}</p>
                </div>

                <div className={styles.descriptionCardInfo}>
                <p className={styles.descriptionProduct}>{productState.description}</p>
                </div>

                <div className={styles.footerProduct}>

                <p className={styles.titleFooter} >Price:</p>
                <p className={styles.priceTitle}>$ {productState.price}</p>
                </div>

            </div>
           </div>
        </div>
    );
};
