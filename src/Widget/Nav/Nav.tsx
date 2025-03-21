import styles from "../../App/Styles/Nav.module.css"
import axios from "axios";

import { NavLink } from "react-router";
export const Nav = () => {

    // async function getData(){
    //     const url:string =  "";

    //     const apiKey:string = 'beaa5519750583a59a89bc0df3e8960d'
    //     try{
    //         // const response  = await axios.get(url,{
    //         //     params:{
    //         //         apikey:apiKey,
    //         //     }

    //         // })
    //         console.log(response.data);
    //     }catch(error){
    //         console.error("Ошибка", error)
    //     }

    // }
    return (
        <div className={styles.navWrap}>
            <div className={styles.titleWrap}>
                <h1 className={styles.titleName}>Alfa shop</h1>
            </div>
            <div className={styles.listWrap}>
            <ul className={styles.listNavWrap}>
                <NavLink to="/"><li className={styles.listItem} >Home</li></NavLink>
                <NavLink to="products/"><li className={styles.listItem}
                >Products</li></NavLink>
                <NavLink to="favorite/"><li className={styles.listItem}>Favorites</li></NavLink>
            </ul>
            </div>

        </div>
    );
};
