import s from "./styles.module.css";
import AppLogo from "../AppLogo";
import { NavLink } from "react-router-dom";

const AppHeaderNav = () => {
  return (
    <div className={s["header-nav"]}>
      <AppLogo />
      <NavLink
        activeClassName={s.active}
        title="Обо мне"
        className={s["header-nav__link"]}
        to="/about"
      >
        Обо мне
      </NavLink>
      <NavLink
        activeClassName={s.active}
        title="Работы"
        className={s["header-nav__link"]}
        to="/works"
      >
        Работы
      </NavLink>
      <NavLink
        activeClassName={s.active}
        title="Статьи"
        className={s["header-nav__link"]}
        to="/articles"
      >
        Статьи
      </NavLink>
      <NavLink
        activeClassName={s.active}
        title="Контакты"
        className={s["header-nav__link"]}
        to="/contacts"
      >
        Контакты
      </NavLink>
    </div>
  );
};

export default AppHeaderNav;
