import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router로 페이지 이동
import QuestionCardMainPresenter from "./QuestionCardMainPresenter";
import { useRouter } from "next/router";

const QuestionCardMainContainer = (props) => {
  const router = useRouter(); // 페이지 이동 함수

  const multipleChoice = JSON.parse(props.multipleChoice);

  const multipleChoiceArr = multipleChoice.map((data, index) => {
    const options = data.opt.split("/");
    return {
      content: data.name,
      id: index + 1,
      options: options,
      answer: data.answer - 1,
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 보기
  const [incorrectOptions, setIncorrectOptions] = useState([]); // 오답 보기 목록
  const [isCorrect, setIsCorrect] = useState(null); // 정답 여부
  const [buttonState, setButtonState] = useState("submit"); // 버튼 상태 ('submit' 또는 'next')
  const [correctCount, setCorrectCount] = useState(0); // 맞춘 문제 수

  const handleSelectOption = (index) => {
    if (!incorrectOptions.includes(index)) {
      setSelectedOption(index); // 선택한 보기 저장
    }
  };

  const handleSubmit = () => {
    const currentQuestion = multipleChoiceArr[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      if(isCorrect !== false){
        setCorrectCount((prev) => prev + 1); // 맞춘 문제 수 증가
      }
      setIsCorrect(true); // 정답 처리
      setButtonState("next"); // 버튼 상태를 다음 버튼으로 변경
    } else {
      setIncorrectOptions((prev) => [...prev, selectedOption]); // 오답 처리
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentIndex === multipleChoiceArr.length - 1) {
      // 마지막 문제일 경우 결과 화면으로 이동
      router.push({
        pathname: "/ResultPage",
        query: {
          totalQuestions: multipleChoiceArr.length,
          correctAnswers: correctCount,
        },
      });
    } else {
      setCurrentIndex((prev) => prev + 1); // 다음 문제로 이동
      setSelectedOption(null); // 선택 초기화
      setIncorrectOptions([]); // 오답 초기화
      setIsCorrect(null); // 정답 여부 초기화
      setButtonState("submit"); // 버튼 상태 초기화
    }
  };

 
  return (
    <QuestionCardMainPresenter
      question={multipleChoiceArr[currentIndex]}
      current={currentIndex + 1}
      total={multipleChoiceArr.length}
      selectedOption={selectedOption}
      incorrectOptions={incorrectOptions}
      isCorrect={isCorrect}
      buttonState={buttonState}
      onSelect={handleSelectOption}
      onSubmit={handleSubmit}
      onNext={handleNext}
    />
  );
};

export default QuestionCardMainContainer;
