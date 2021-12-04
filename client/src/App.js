import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Home, LoginPage, SignupPage, FormulaCalculator} from "./views";

function App() {
  return (
  <BrowserRouter>
    <div>
    {/* Extract to a NavBar component */}
    <nav> 
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/formula-calculator">Formula Calculator</Link>
      </li>
      </ul>
    </nav>
    </div>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/signup">
      <SignupPage />
    </Route>
    <Route path="/formula-calculator">
      <FormulaCalculator />
    </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
