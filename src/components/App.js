import '../styles/App.css';
import Home from "./Home"
import ThankYou from './ThankYou'
// import Blog from "./Blog"

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
function App() {
return (
  <div className="App">
      <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/thankyou">
                    <ThankYou />
                </Route>
            </Switch>
        </Router>
  </div>
);
}

export default App;

