import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = ({ data }) => {
  return (
    <div className="DiaryList">
      <section className="menu_bar">
        <select name="" id="">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"NEW"} type={"POSITIVE"} />
      </section>
      <section className="list_wrapper">
        {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default DiaryList;
