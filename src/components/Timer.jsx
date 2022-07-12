function Timer(props) {
  return (
    <div id="timer">
      <div id="elapsed" style={{ width: `${props.width * 20}%` }}></div>
    </div>
  );
}

export default Timer;
