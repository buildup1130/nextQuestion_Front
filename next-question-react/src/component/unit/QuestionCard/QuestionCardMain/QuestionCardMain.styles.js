import styled from "@emotion/styled";

export const QuestionCardMain__Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 메인 컨테이너 스타일
export const MainContainer = styled.div`
  width: 1000px;
  /* height: 600px; */
  font-family: Arial, sans-serif;

  border: 1px solid grey;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow:hidden;
`;

// 버튼 스타일
export const Button = styled.button`
  width: 150px;
  height: 50px;

  margin-left: 100px;
  font-size: 20px;
  background-color: #fff350;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background-color: gray; // 마우스 오버 시 색상 변경
  }
`;

export const SubContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  transform: translateY(100px);
  padding-left: 100px;
`;

export const SubContainer__Current = styled.div`
  font-size: 24px;
  margin-right: 20px;
`