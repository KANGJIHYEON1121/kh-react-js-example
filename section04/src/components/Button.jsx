function Button({ text, color = "red", children }) {
  // e(객체참조변수) : 버튼에서 이벤트 클릭 시 모든 정보를 가지고 있다.
  const onClickButton = (e) => {
    console.log(e);
    alert(`text = ${text} color = ${color} children = ${children}`);
  };

  return (
    <>
      <button
        name="kjh"
        type="button"
        style={{ color }}
        onClick={onClickButton}
      >
        {text} - {text.toUpperCase()}
        {children}
      </button>
    </>
  );
}

export default Button;
