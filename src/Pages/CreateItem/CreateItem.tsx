import { useState, useEffect } from "react";
import styles from "../../App/Styles/CreateItem.module.css";
import { RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { getMenuCategory } from "../../Services/getApiData";
import { createItem } from "../../Store/Slice/ShopSlice/ShopSlice";
import axios from "axios";

interface ProductFormData {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

export const CreateItem = () => {

    const dispatch = useDispatch();
    const { menuCategory } = useSelector((state: RootState) => state.categorySlice);

    const [formData, setFormData] = useState<ProductFormData>({
        title: "",
        price: 0,
        description: "",
        categoryId: menuCategory,
        images: ["https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"],
    });


    useEffect(() => {
        if(menuCategory.length === 0){
          getMenuCategory(dispatch)
        }

  }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "price" || name === "categoryId" ? Number(value) : value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setFormData((prev) => ({
                ...prev,
                images: [e.target.value], 
            }));
        }
    };

    const url = `https://api.escuelajs.co/api/v1/products/`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData); 
            console.log(response.status); 
            if(response.status=== 200 || response.status===201 ){
                dispatch(createItem(formData))
            }
        } catch (error) {
            console.error("Error submitting form:", error); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <label className={styles.label}>
                Title
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>

            <label className={styles.label}>
                Price
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </label>

            <label className={styles.label}>
                Description
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>

            <label className={styles.label}>Category:</label>
            <select name="categoryId" value={formData.categoryId} onChange={handleChange} className={styles.select}>
                {menuCategory.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <label className={styles.label}>
                Image URL:
                <input type="text" name="images" value={formData.images[0]} onChange={handleImageChange} required />
            </label>

            <button className={styles.buttonCreate} type="submit">
                Create Product
            </button>
        </form>
    );
};
