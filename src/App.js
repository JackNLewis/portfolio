import './App.css';
import Home from "./components/Home"
import Blog from "./components/Blog"

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
  
function App() {
return (
  <div className="App">
    <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/blog/:id">
                <Blog />
            </Route>
        </Switch>
    </Router>
  </div>
);
}

export default App;
