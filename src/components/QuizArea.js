import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreeting";
import PassMsg from "./PassMsg";
import FailMsg from "./FailMsg";

function QuizArea(props) {
  if (props.isFinished) {
    if (props.correct >= 2) {
      return <PassMsg />;
    } else if (props.incorrect >= 3) {
      return <FailMsg />;
    } else {
      return <UserGreeting />;
    }
  }
  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;
