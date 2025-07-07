import "./ListItem.css";

const ListItem = ({ id, isDone, content, date }) => {
  return (
    <div className="ListItem">
      <div className="box">
        <input readOnly type="checkbox" checked={isDone} />
        <div className="content">{content}</div>
      </div>
      <div className="date-box">
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default ListItem;
