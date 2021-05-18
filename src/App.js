import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import University from "./components/university/University";
import Teacher from "./components/teacher/Teacher";
import Student from "./components/student/Student";
import CreateCourse from "./components/university/CreateCourse";
import Feedback from "./components/Feedback/feedback";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/universities" exact component={University} />
          <Route
            path="/universities/new-course"
            exact
            component={CreateCourse}
          />
          <Route path="/teachers" exact component={Teacher} />
          <Route path="/students" exact component={Student} />
          <Route path="/feedbacks/:courseId/:topicId" exact component={Feedback} />
        </div>
      </Router>
    </div>
  );
};

export default App;
