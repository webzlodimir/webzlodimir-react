import s from "./styles.module.css";

const AppTitle = props => {
  return <h1 className={s.title}>{props.children}</h1>;
};

export default AppTitle;
