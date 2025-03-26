import styles from "../../App/Styles/Nav.module.css";
import { BurgerMenu } from "../../Shared/BurderMenu/BurgerMenu";
import { useState } from "react";
import { NavLink } from "react-router";

export const Nav = () => {
  const [burger, setBurger] = useState(false);

  function burgerLink() {
    if (!burger) return;

    setBurger((prev) => !prev);
  }

  const listNav = () => {
    return (
      <>
        <NavLink to="/alfaCard/" onClick={() => burgerLink()}>
          <li className={styles.listItem}>Home</li>
        </NavLink>
        <NavLink to="products/" onClick={() => burgerLink()}>
          <li className={styles.listItem}>Products</li>
        </NavLink>
        <NavLink to="favorite/" onClick={() => burgerLink()}>
          <li className={styles.listItem}>Favorites</li>
        </NavLink>
        <NavLink to="create-product/" onClick={() => burgerLink()}>
          <li className={styles.listItem}>Create</li>
        </NavLink>
      </>
    );
  };

  return (
    <>
      <div className={styles.navWrap}>
        <div className={styles.titleWrap}>
          <h1 className={styles.titleName}>Alfa shop</h1>
        </div>
        <div className={styles.listWrap}>
          <ul className={styles.listNavWrap}>{listNav()}</ul>
          <BurgerMenu
            onChange={() => setBurger((prev) => !prev)}
            className={styles.burgerMenuWrap}
            checked={burger}
          />
        </div>
      </div>
      {burger && (
        <div className={styles.menu}>
          <ul className={styles.listNavBurger}>{listNav()}</ul>
        </div>
      )}
    </>
  );
};
