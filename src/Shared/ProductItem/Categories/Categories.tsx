import  styles from "../../../App/Styles/Categories.module.css"
import { useDispatch } from "react-redux"
import { setCategoryType } from "../../../Store/Slice/CategorySlice/CategorySlice"
import { useEffect } from "react"
interface ICategories{
    list:string[],
    active:string,
}


export const Categories = ({list,active}:ICategories) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.categoriesWrap}>
            <h3 className={styles.catTitle}> Categories:</h3>
            <ul>
                {list.map((item , index)=>(
                    <li
                    key={index}
                    style={{borderLeft:`${active === item.toLocaleLowerCase() ? " 3px solid rgb(129, 14, 245)": "0px "}  `}}
                    className={styles.catLi}
                    onClick={()=>dispatch(setCategoryType(item.toLocaleLowerCase()))}
                    >{item}</li>
                ))}
            </ul>
        </div>
    );
};
