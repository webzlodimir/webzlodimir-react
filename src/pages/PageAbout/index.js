import "./styles.css";
import AppPage from "../../components/AppPage";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";

const PageAbout = () => {
  document.title = "Обо мне";
  const age =
    ((new Date().getTime() - new Date("1991-08-03")) /
      (24 * 3600 * 365.25 * 1000)) |
    0;
  return (
    <AppPage className="about">
      <AppContainer>
        <AppTitle>Обо мне</AppTitle>
        <p>
          Привет, меня зовут Владимир Бандуристов. Мне {age}, живу в Москве,
          разрабатываю фронтенд в <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="disabled"
            href="https://seococktail.ru/"
          >
            SEO Cocktail
          </a>
          →
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="disabled"
            href="https://rang56.ru/"
          >
            RANG
          </a>
          →
          <a target="_blank" rel="noopener noreferrer" href="https://webit.ru">
            Webit
          </a>
        </p>
        <div className="about__exp">
          <h2>Технологии (Frontend)</h2>
          <ul>
            <li>Большой опыт в верстке HTML5, CSS3;</li>
            <li>Большой опыт работы с препроцессорами LESS, SASS;</li>
            <li>Для сборки верстки использую Gulp;</li>
            <li>Для небольших сайтов Parcel или Webpack;</li>
            <li>Хорошо владею jQuery и чуть хуже чистым JS;</li>
            <li>
              Владею основами Vuejs, Vuex, Nuxt, имею опыт в коммерческой
              разработке;
            </li>
            <li>
              Способен настроить Gulp, Parcel и скрипты в npm/yarn, почти не
              матерясь;
            </li>
            <li>Стараюсь оптимизировать Frontend для быстрой загрузки.</li>
          </ul>
        </div>

        <div className="about__exp">
          <h2>Технологии (Backend)</h2>
          <ul>
            <li>На базовом уровне владею PHP, MySQL, шаблонизатором Smarty;</li>
            <li>Знаком с основами NodeJs;</li>
            <li>
              На базовом уровне знаком со следующими CMS: Wordpress, Joomla,
              Drupal, Bitrix, Netcat, Diafan.
            </li>
          </ul>
        </div>

        <div className="about__exp">
          <h2>Дизайн</h2>
          <ul>
            <li>
              Владею Photoshop, Figma, Avocode, Sketch на уровне правок и
              нарезки макетов;
            </li>
            <li>Имею базовые навыки 3ds Max, Corona Render.</li>
          </ul>
        </div>

        <div className="about__exp">
          <h2>Другие навыки</h2>
          <ul>
            <li>Внимателен к мелочам в своем и чужом коде;</li>
            <li>
              Называю функции и классы понятными не только для себя именами;
            </li>
            <li>
              Комментирую код со ссылками на сторонние документации для
              последующей поддержки;
            </li>
            <li>
              Много читаю, имею опыт в менторстве, постоянно учусь сам и могу
              обучать других;
            </li>
            <li>
              Стараюсь посещать профильные и не только конференции, митапы.
            </li>
          </ul>
        </div>
      </AppContainer>
    </AppPage>
  );
};

export default PageAbout;
