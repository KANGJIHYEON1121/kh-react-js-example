import "./DiaryItem.css";
import { getEmotionImages } from "../util/getEmotionImages";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  return (
    <div className="DiaryItem">
      <section className="img_section">
        <img src={getEmotionImages(emotionId)} alt="이미지" />
      </section>
      <section className="info_section">
        <div className="create_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </section>
      <section className="button_section">
        <Button text={"수정"} />
      </section>
    </div>
  );
};

export default DiaryItem;
