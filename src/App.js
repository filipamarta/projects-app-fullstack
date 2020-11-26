import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import ProjectPage from "./components/ProjectPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/project/:project" component={ProjectPage} />
      </Switch>
    </div>
  );
}

export default App;
