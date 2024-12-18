import React from "react";
import QuestionPresenter from "./QuestionPresenter";

const QuestionContainer = ({ content, current }) => {
  return <QuestionPresenter content={content} current={current} />;
};

export default QuestionContainer;
