import s from "./styles.module.css";

const AppHero = props => {
  const rand = 1 - 0.5 + Math.random() * 3;
  const randVideo = Math.round(rand);
  return (
    <div className={s.hero}>
      <div className={s.hero__wrapper}>
        <div>{props.children}</div>
        <div className={s.hero__video}>
          <video
            width="100%"
            height="100%"
            muted
            autoPlay={true}
            loop
            playsInline={true}
          >
            <source src={`/videos/video${randVideo}.mp4`} type="video/mp4" />
            <source src={`/videos/video${randVideo}.webm`} type="video/webm" />
            <source src={`/videos/video${randVideo}.ogg`} type="video/ogg" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
