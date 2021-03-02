import "./styles.css";

const AppPage = props => {
  return (
    <div className={`page ${props.className || ""}`}>{props.children}</div>
  );
};

export default AppPage;
