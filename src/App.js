import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import University from "./components/University";
import Professor from "./components/Professor";
import Student from "./components/Student";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/university" exact component={University} />
          <Route path="/professor" exact component={Professor} />
          <Route path="/student" exact component={Student} />
        </div>
      </Router>
    </div>
  );
};

export default App;
