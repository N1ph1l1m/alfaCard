import styles from "../../App/Styles/Nav.module.css"
import axios from "axios";
import { NavLink } from "react-router";
export const Nav = () => {

    async function getData(){
        const url:string =  "";

        const apiKey:string = 'beaa5519750583a59a89bc0df3e8960d'
        try{
            // const response  = await axios.get(url,{
            //     params:{
            //         apikey:apiKey,
            //     }

            // })
            console.log(response.data);
        }catch(error){
            console.error("Ошибка", error)
        }

    }
    return (
        <div className={styles.navWrap}>
            <ul className={styles.listNavWrap}>
                <NavLink to="/"><li className={styles.listItem} >Главная</li></NavLink>
                <NavLink to="products/"><li className={styles.listItem}

                >Продукты</li></NavLink>
                <NavLink to="favorite/"><li className={styles.listItem}>Избранное</li></NavLink>
            </ul>
        </div>
    );
};
