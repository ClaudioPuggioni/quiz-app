function TableRow(props) {
  return (
    <tr className="tableRow">
      <td className="questionTable">{props.questionTable}</td>
      <td className="choice" style={{ backgroundColor: props.choiceColor }}>
        {props.choice}
      </td>
      <td className="correctAns">{props.correctChoice}</td>
    </tr>
  );
}

export default TableRow;
