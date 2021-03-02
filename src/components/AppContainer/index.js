import s from "./styles.module.css";

const AppContainer = props => {
  return <div className={s["app-container"]}>{props.children}</div>;
};

export default AppContainer;
