import React from "react";
import { Question__Wrapper, QuestionText } from "./Question.styles";

const QuestionPresenter = ({ content, current }) => {
  return (
    <Question__Wrapper>
      <QuestionText>
        문제 {current}. {content}
      </QuestionText>
    </Question__Wrapper>
  );
};

export default QuestionPresenter;
