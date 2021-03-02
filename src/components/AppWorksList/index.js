import s from "./styles.module.css";

const AppWorksList = props => {
  return <div className={s["works-list"]}>{props.children}</div>;
};

export default AppWorksList;
