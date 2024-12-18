import QueOptionboxUI from "./QueOptionboxPresenter";

export default function QueOptionboxLogic(props) {
  return (
    <QueOptionboxUI
      count={props.count}
      setCount={props.setCount}
      setIsOpen={props.setIsOpen}
      onClickSubmit={props.onClickSubmit}
    ></QueOptionboxUI>
  );
}
