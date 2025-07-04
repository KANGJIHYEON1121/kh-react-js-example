function CountButton({ countClickBtn }) {
  return (
    <div>
      <button onClick={() => countClickBtn()}>+1</button>
    </div>
  );
}

export default CountButton;
