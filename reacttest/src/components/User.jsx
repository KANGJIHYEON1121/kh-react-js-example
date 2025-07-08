const User = ({ item, onDelete, onUpdate }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.gender}</td>
      <td>
        {item.phone}
        <button
          className="editBtn"
          onClick={() => {
            onUpdate(item.phone);
          }}
        >
          수정
        </button>
        <button
          className="deleteBtn"
          onClick={() => {
            onDelete(item.phone);
          }}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default User;
