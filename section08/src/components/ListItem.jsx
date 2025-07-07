import "./ListItem.css";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="ListItem">
      <div className="box">
        <input
          readOnly
          type="checkbox"
          checked={isDone}
          onChange={onChangeCheckBox}
        />
        <div className="content">{content}</div>
      </div>
      <div className="date-box">
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickBtn}>삭제</button>
      </div>
    </div>
  );
};

export default ListItem;
