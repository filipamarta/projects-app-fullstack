import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <h1>tentativa 2</h1>
        <Route exact path="/" component={""} />
      </Switch>
      <MainPage />
    </div>
  );
}

export default App;
