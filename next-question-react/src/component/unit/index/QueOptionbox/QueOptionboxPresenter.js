import {
  QueOptionbox__Button,
  QueOptionbox__Container,
  QueOptionbox__Subtitle,
  QueOptionbox__Count,
  QueOptionbox__Wrapper,
  QueOptionbox__SubmitContainer,
  QueOptionbox__Backdrop,
  QueOptionbox__line,
  QueOptionbox__SubmitButton,
  QueOptionbox__arr,
} from "./QueOptionboxStyles";

export default function QueOptionboxUI(props) {
  console.log(props.spinner);

  return (
    <>
      <QueOptionbox__Backdrop
        onClick={() => {
          props.setIsOpen(false);
        }}
      ></QueOptionbox__Backdrop>
      <QueOptionbox__Wrapper id="optBox">
        <QueOptionbox__Subtitle style={{ textAlign: "center" }}>
          문제 생성하기
        </QueOptionbox__Subtitle>
        <QueOptionbox__line></QueOptionbox__line>
        <QueOptionbox__Subtitle style = {{marginLeft:"10px"}}>문제 개수</QueOptionbox__Subtitle>
        <QueOptionbox__Count>{props.count}개</QueOptionbox__Count>
        <QueOptionbox__Container>
          <QueOptionbox__arr>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(5);
            }}
          >
            5
          </QueOptionbox__Button>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(10);
            }}
          >
            10
          </QueOptionbox__Button>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(15);
            }}
          >
            15
          </QueOptionbox__Button>

          </QueOptionbox__arr>
          <QueOptionbox__arr>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(20);
            }}
          >
            20
          </QueOptionbox__Button>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(25);
            }}
          >
            25
          </QueOptionbox__Button>
          <QueOptionbox__Button
            onClick={() => {
              props.setCount(30);
            }}
          >
            30
          </QueOptionbox__Button>
          </QueOptionbox__arr>
        </QueOptionbox__Container>
        <QueOptionbox__SubmitContainer>
          <QueOptionbox__SubmitButton
            onClick={() => {
              props.setIsOpen(false);
            }}
            style={{ backgroundColor: "#d9d9d9" }}
          >
            취소하기
          </QueOptionbox__SubmitButton>
          <QueOptionbox__SubmitButton
            onClick={props.onClickSubmit}
            style={{ backgroundColor: "#fff350" }}
          >
            생성하기
          </QueOptionbox__SubmitButton>
        </QueOptionbox__SubmitContainer>
      </QueOptionbox__Wrapper>
    </>
  );
}
