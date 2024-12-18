import React from "react";
import ResultPresenter from "./ResultPresenter";
import {useRouter} from "next/router";

const ResultContainer = (props) => {
  const router = useRouter();

  const{totalQuestions, correctAnswers} = router.query;
  console.log(router.query);

  const incorrectAnswers = totalQuestions - correctAnswers; // 틀린 문제 수 계산
  const correctPercentage = (correctAnswers / totalQuestions) * 100; // 정답 비율 계산

  return (
    <ResultPresenter
      totalQuestions={totalQuestions} // 총 문제 수 전달
      correctAnswers={correctAnswers} // 맞춘 문제 수 전달
      incorrectAnswers={incorrectAnswers} // 틀린 문제 수 전달
      correctPercentage={correctPercentage} // 정답 비율 전달
    />
  );
};

export default ResultContainer;
