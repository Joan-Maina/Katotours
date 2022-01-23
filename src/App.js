import "./App.css";
import Createtrip from "./pages/Createtrip";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filtertours from "./pages/Filtertours";
import Masaimara from "./pages/Masaimara";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Createtrip />
          </Route>
          <Route path="/alltours">
            <Filtertours />
          </Route>
          <Route path="/masaimara">
            <Masaimara />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
