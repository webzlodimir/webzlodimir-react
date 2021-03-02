import s from "./styles.module.css";

const AppWorksItem = props => {
  function src(ext, id) {
    if (ext === "single") {
      return `/img/works/${id}.jpg`;
    } else {
      return `/img/works/${id}.${ext} 1x,/img/${id}@2x.${ext} 2x`;
    }
  }

  return (
    <div className={s["works-item"]}>
      <picture>
        <source type="image/avif" srcSet={src("avif", props.item.id)} />
        <source type="image/webp" srcSet={src("webp", props.item.id)} />
        <img
          src={src("single", props.item.id)}
          srcSet={src("jpg", props.item.id)}
          alt={props.item.title}
          className={s["works-item__img"]}
        />
      </picture>
      <div className={s["works-item__desc"]}>
        <p className={s["works-item__title"]}>{props.item.title}</p>
        <div className={s["works-item__tag-list"]}>
          {props.item.desc.map((tag, index) => (
            <p key={`tag-${index}`} className={s["works-item__tag"]}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <a
        title={props.item.alt}
        target="_blank"
        rel="noopener noreferrer"
        href={props.item.link}
        className={s["works-item__link"]}
      />
    </div>
  );
};

export default AppWorksItem;
