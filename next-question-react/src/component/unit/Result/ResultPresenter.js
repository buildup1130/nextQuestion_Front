import React from "react";

import {
  ResultContainer,
  CircleContainer,
  Circle,
  CircleText,
  CompleteButton,
  ResultWrapper,
  CirleBorder,
  InnerCircle,
  Circlefont,
} from "./Result.styles.js";

export default function ResultPresenter(props) {
  return (
    <ResultWrapper>
      <ResultContainer>
        <CirleBorder
          percentage={(props.correctAnswers / props.totalQuestions) * 100}
        >
          <Circlefont>
            {props.correctAnswers}/{props.totalQuestions}
          </Circlefont>
          <InnerCircle></InnerCircle>
        </CirleBorder>
        {/* 학습 완료 버튼 */}
        <CompleteButton>학습완료</CompleteButton>
      </ResultContainer>
    </ResultWrapper>
  );
}
