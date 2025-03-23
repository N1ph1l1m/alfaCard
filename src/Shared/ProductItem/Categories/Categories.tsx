import styles from "../../../App/Styles/Categories.module.css";
import { useDispatch} from "react-redux";
import { setCategoryType } from "../../../Store/Slice/CategorySlice/CategorySlice";


export const Categories = ({ list, active }) => {
    const dispatch = useDispatch();
   
    if (!Array.isArray(list)) {
        console.error("Expected 'list' to be an array but got", typeof list);
        return null
    }

    return (
        <div className={styles.categoriesWrap}>
            <h3 className={styles.catTitle}>Categories:</h3>
            <ul>
                {list.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            borderLeft: `${
                                active === item.name.toLocaleLowerCase()
                                    ? "3px solid rgb(129, 14, 245)"
                                    : "0px"
                            }`,
                        }}
                        className={styles.catLi}
                        onClick={() => 
                            dispatch(setCategoryType(item.name.toLocaleLowerCase()))
                        }
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
