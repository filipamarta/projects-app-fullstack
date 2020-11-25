import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import ProjectPage from "./components/ProjectPage";
import { withRouter } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/project/:project" component={ProjectPage} />
      </Switch>
      <MainPage />
    </div>
  );
}

export default App;
