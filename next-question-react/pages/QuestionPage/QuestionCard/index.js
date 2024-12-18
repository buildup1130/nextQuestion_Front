import React from "react";
import QuestionCardMainContainer from "../../../src/component/unit/QuestionCard/QuestionCardMain/QuestionCardMainContainer"
import {useRouter} from "next/router"

const QuestionCardPage = () => {
  const router = useRouter();
  const multipleChoice = router.query.multipleChoice;

  return <QuestionCardMainContainer 
    multipleChoice = {multipleChoice}
  />; // 메인 컨테이너 렌더링
};

export default QuestionCardPage;
