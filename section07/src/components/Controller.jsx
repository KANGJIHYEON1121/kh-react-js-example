function Controller({ onChangeBtn }) {
  return (
    <div>
      <button onClick={() => onChangeBtn(-1)}>-1</button>
      <button onClick={() => onChangeBtn(-10)}>-10</button>
      <button onClick={() => onChangeBtn(-100)}>-100</button>
      <button onClick={() => onChangeBtn(100)}>+100</button>
      <button onClick={() => onChangeBtn(10)}>+10</button>
      <button onClick={() => onChangeBtn(1)}>+1</button>
    </div>
  );
}
export default Controller;
