import IndexUI from "./IndexPresenter";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner } from "spin.js";

export default function IndexLogic() {
  const [file, setFile] = useState(undefined);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const opts = {
    lines: 13, // The number of lines to draw
    length: 12, // The length of each line
    width: 5, // The line thickness
    radius: 10, // The radius of the inner circle
    scale: 1, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    color: "#cacaca", // CSS color or array of colors
    fadeColor: "transparent", // CSS color or array of colors
    speed: 3, // Rounds per second
    rotate: 0, // The rotation offset
    animation: "spinner-line-fade-quick", // The CSS animation name
    direction: 1, // 1: clockwise, -1: counterclockwise
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    className: "spinner", // The CSS class to assign to the spinner
    top: "50%", // Top position relative to parent
    left: "50%", // Left position relative to parent
    position: "absolute", // Element positioning
  };

  const uploadFile = async () => {
    //File Formdata 생성
    const formData = new FormData();
    formData.append("files", file);

    const options = { option: { numOfQuestions: count } };
    const optionsJson = JSON.stringify(options);
    console.log(optionsJson);

    const blob = new Blob([optionsJson], { type: "application/json" });
    formData.append("files", blob, "options.json");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/file/upload/guest",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 파일 전송을 위해 필수
          },
        }
      );
      return res.data;
      alert("성공");
    } catch (err) {
      alert("실패");
      console.error(err);
    } finally {
    }
  };

  const onClickSubmit = () => {
    const spinner = new Spinner(opts);
    const target = document.getElementById("optBox"); // 스피너가 표시될 대상 엘리먼트
    spinner.spin(target);

    uploadFile()
      .then((res) => {
        const multipleChoice = res.questions.filter(
          (ques) => ques.type === "MULTIPLE_CHOICE"
        );
        router.push({
          pathname: "/QuestionPage/QuestionCard",
          query: { multipleChoice: JSON.stringify(multipleChoice) },
        });
        console.log(res.questions);
      })
      .catch((error) => {
        alert("업로드 중 문제 발생");
        console.error(error);
      })
      .finally(() => {
        spinner.stop();
      });
  };

  //File이 변경될 때 호출, QueOptionbox 표시하기
  useEffect(() => {
    if (file) {
      setIsOpen(true);
    }
  }, [file]);

  return (
    <IndexUI
      file={file}
      setFile={setFile}
      count={count}
      setCount={setCount}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickSubmit={onClickSubmit}
    ></IndexUI>
  );
}
