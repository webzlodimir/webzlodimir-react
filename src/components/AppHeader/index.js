import s from "./styles.module.css";
import AppHeaderNav from "../AppHeaderNav";
import AppContainer from "../AppContainer";

const AppHeader = props => {
  return (
    <div className={s.header}>
      <AppContainer>
        <AppHeaderNav />
      </AppContainer>
    </div>
  );
};

export default AppHeader;
