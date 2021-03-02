import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageWorks from "./pages/PageWorks";
import PageArticles from "./pages/PageArticles";
import PageContacts from "./pages/PageContacts";

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/contacts">
          <PageContacts />
        </Route>
        <Route path="/works">
          <PageWorks />
        </Route>
        <Route path="/articles">
          <PageArticles />
        </Route>
        <Route path="/about">
          <PageAbout />
        </Route>
        <Route path="/">
          <PageHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
