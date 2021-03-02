import AppHero from "../../components/AppHero";
import AppContainer from "../../components/AppContainer";
import AppPage from "../../components/AppPage";
import AppIconList from "../../components/AppIconList";

const PageHome = () => {
  document.title = "Владимир Бандуристов - Frontend Developer";
  return (
    <AppPage>
      <AppContainer>
        <AppHero>
          <h1>Владимир Бандуристов</h1>
          <h2>Frontend Developer</h2>
          <AppIconList />
        </AppHero>
      </AppContainer>
    </AppPage>
  );
};

export default PageHome;
