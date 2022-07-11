function Button(props) {
  return (
    <button className="button" style={{ backgroundColor: props.bgColor, pointerEvents: props.clickedState }} onClick={() => props.handleClick(props.idx)}>
      {props.text}
    </button>
  );
}

export default Button;
