import "./styles.css";
import AppPage from "../../components/AppPage";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";

const PageArticles = () => {
  document.title = "Статьи";
  const articles = [
    {
      id: 1,
      name: "Приёмы и хитрости, которые упростят жизнь разработчика",
      url: "https://tproger.ru/articles/programmers-lifehacks/",
      date: "22.01.2020"
    },
    {
      id: 2,
      name: "CSS переменные (пользовательские CSS-свойства) за 5 минут",
      url: "http://bit.ly/2XXimIP",
      date: "22.07.2019"
    },
    {
      id: 3,
      name: "Создание скроллбара с эффектом загрузки на Vue.js",
      url: "http://bit.ly/2Jtneg7",
      date: "12.02.2019"
    },
    {
      id: 4,
      name:
        "Создание чертовски простого макета календаря с помощью CSS Grid, Moment.js и Vue.js",
      url: "http://bit.ly/2GvGiIr",
      date: "26.06.2019"
    },
    {
      id: 5,
      name: "Удаление Emoji из строки с помощью PHP",
      url: "http://bit.ly/2Le363x",
      date: "10.06.2019"
    },
    {
      id: 6,
      name:
        "5 Vuex плагинов которые вы можете использовать в своем следующем Vue.js проекте",
      url: "http://bit.ly/2XFgd4k",
      date: "26.06.2018"
    }
  ];
  return (
    <AppPage className="articles">
      <AppContainer>
        <AppTitle>Статьи</AppTitle>
        {articles.map((article, index) => (
          <p key={`article-${index}`} className="articles__paragraph">
            <span className="articles__link-date">{article.date}</span>
            <a
              className="articles__link"
              target="_blank"
              rel="noopener noreferrer"
              href={article.url}
              title={article.name}
            >
              {article.name}
            </a>
          </p>
        ))}
      </AppContainer>
    </AppPage>
  );
};

export default PageArticles;
