import '../styles/App.css';
import Home from "./Home"
// import Blog from "./Blog"

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from "react-router-dom";
// import ScrollToTop from './ScrollToTop';
  
function App() {
return (
  <div className="App">
      <Home />
   
  </div>
);
}

export default App;


 /* <Router>
        <ScrollToTop />
        <Switch>
            <Route exact path="/portfolio">
                <Home />
            </Route>
            <Route exact path="/portfolio/blog/:id">
                <Blog />
            </Route>
        </Switch>
    </Router> */