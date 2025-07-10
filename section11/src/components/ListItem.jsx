import { memo } from "react";
import "./ListItem.css";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(`고차컴포넌트 아이디: ${id}`);
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

export default memo(ListItem);

// export default memo(ListItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });
