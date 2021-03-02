import s from "./styles.module.css";

const AppIcon = props => {
  return (
    <div className={s.icon}>
      <svg width="40px" height="40px">
        <use xlinkHref={`/sprite.svg#${props.icon}`} />
      </svg>
    </div>
  );
};

export default AppIcon;
