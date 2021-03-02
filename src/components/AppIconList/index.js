import s from "./styles.module.css";
import AppIcon from "../AppIcon";

const AppIconList = () => {
  const techs = ["html", "css", "sass", "js", "vuejs", "gulp", "nodejs", "git"];
  return (
    <div className={s["icon-list"]}>
      {techs.map((tech, index) => (
        <AppIcon key={`icon-${index}`} icon={tech} />
      ))}
    </div>
  );
};

export default AppIconList;
