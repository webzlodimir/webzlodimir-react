import "./styles.css";
import AppPage from "../../components/AppPage";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import AppWorksList from "../../components/AppWorksList";
import AppWorksItem from "../../components/AppWorksItem";

const PageWorks = () => {
  document.title = "Работы";
  const worksList = [
    {
      link: "https://shop.casio.ru/",
      id: 14,
      title: "CASIO",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://www.vodoparad.ru/",
      id: 20,
      title: "VodoParad",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://ambassador-manufaktura.ru/",
      id: 19,
      title: "Ambassador Manufaktura",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://tecdoc.moscow/",
      id: 16,
      title: "TecAlliance",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://yoxbe.com/",
      id: 13,
      title: "Yoxbe",
      desc: ["vuejs"]
    },
    {
      link: "https://fbgames.ru/",
      id: 18,
      title: "Фабрика игр",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "http://www.fraikinrus.ru/",
      id: 12,
      title: "Fraikin",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://seococktail.ru/",
      id: 9,
      title: "SEO Cocktail",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://xn----7sbpnjfffbnak8ag2q.xn--p1ai/",
      id: 1,
      title: "Потолочный Десант",
      desc: ["html", "css", "vuejs"]
    },
    {
      link: "https://xn----jtbkofbaeckeini.xn--p1ai/",
      id: 2,
      title: "Простой Ремонт",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://5iz5.ru/",
      id: 3,
      title: "Пять из Пяти",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "http://uralenergosnab.com/",
      id: 6,
      title: "УралЭнергоСнаб",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "http://yamakasi56.ru/",
      id: 10,
      title: "Ямакаси",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "http://dhd.su/",
      id: 7,
      title: "DA VINCHI",
      desc: ["html", "css", "jquery"]
    },
    {
      link: "https://novamsk.ru/",
      id: 8,
      title: "НОВА",
      desc: ["html", "css", "jquery"]
    }
  ];
  return (
    <AppPage>
      <AppContainer>
        <AppTitle>Работы в которых я принимал участие</AppTitle>
        <AppWorksList>
          {worksList.map((item, index) => (
            <AppWorksItem key={`work-item-${index}`} item={item} />
          ))}
        </AppWorksList>
      </AppContainer>
    </AppPage>
  );
};

export default PageWorks;
