import Confetti from "react-dom-confetti";

function Button(props) {
  return (
    <button className="button" style={{ backgroundColor: props.bgColor, pointerEvents: props.clickedState }} onClick={() => props.handleClick(props.idx)}>
      {props.text}
      <Confetti active={props.completed} />
    </button>
  );
}

export default Button;
