import React from "react";
import { connect } from "react-redux";
import QuestionList from "./components/QuestionList";
import { Route, Link } from "react-router-dom";
import QuestionDetail from "./components/QuestionDetail";
import NotificationsViewer from "./components/NotificationsViewer";

const AppDisplay = () => (
  <div>
    <Link to={`/`}>
      <h1>isomormphic react</h1>
    </Link>
    <div>
      <NotificationsViewer />
    </div>
    <div>
      <Route exact path="/" render={()=> <QuestionList/>} />
      <Route exact path="/questions/:id" render={({match})=> <QuestionDetail question_id={match.params.id}/>} />

    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppDisplay);