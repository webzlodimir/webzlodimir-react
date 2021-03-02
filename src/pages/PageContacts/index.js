import "./styles.css";
import AppPage from "../../components/AppPage";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import React from "react";

const PageContacts = () => {
  document.title = "Контакты";
  const links = [
    {
      title: "Резюме",
      url: "https://hh.ru/resume/9872b757ff03ffbb140039ed1f6265726f3875"
    },
    {
      title: "Github",
      url: "https://github.com/webzlodimir"
    },
    {
      title: "Gitlab",
      url: "https://gitlab.com/webzlodimir"
    },
    {
      title: "Telegram",
      url: "https://t.me/webzlodimir"
    },
    {
      title: "Вконтакте",
      url: "https://vk.com/webzlodimir"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/webzlodimir"
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/webzlodimir/"
    }
  ];
  return (
    <AppPage className="contacts">
      <AppContainer>
        <AppTitle>Контакты</AppTitle>
        <p className="contacts__paragraph">
          <span>Основной телефон</span>
          <a rel="noopener" className="contacts__link" href="tel:+79017304970">
            +7 901 730-49-70
          </a>
        </p>
        <p className="contacts__paragraph">
          <span>Запасной телефон</span>
          <a rel="noopener" className="contacts__link" href="tel:+79198563826">
            +7 919 856-38-26
          </a>
        </p>
        <p className="contacts__paragraph">
          <span>E-mail</span>
          <a
            rel="noopener"
            className="contacts__link"
            href="mailto:hello@webzlodimir.ru"
          >
            hello@webzlodimir.ru
          </a>
        </p>
        <p className="contacts__paragraph">
          <span>Ссылки</span>
          {links.map((link, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="contacts__link contacts__link--underline"
                  href={link.url}
                >
                  {link.title}
                </a>{" "}
                {index < links.length - 1 && ","}
              </React.Fragment>
            );
          })}
        </p>
      </AppContainer>
    </AppPage>
  );
};

export default PageContacts;
