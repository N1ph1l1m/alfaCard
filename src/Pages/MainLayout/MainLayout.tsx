import styles from "../../App/Styles/MainLayout.module.css";
import { Outlet } from "react-router";
import {Nav} from "../../Widget/Nav/Nav";

export const MainLayout = () => {
  return (
    <>
    <div className={styles.headerWrap}>
    <Nav />
    </div>
        <div className={styles.contentWrap}>

      <Outlet />
    </div>
    </>

  );
};
