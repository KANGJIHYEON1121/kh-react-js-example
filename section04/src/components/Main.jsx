import "./Main.css";
import Button from "./Button";

export default function Main() {
  const buttonProps = {
    text: "mail",
    color: "gray",
  };

  return (
    <>
      <main>
        <Button {...buttonProps} />
        <Button text={"학급"} color={"blue"} />
        <Button text={"카페"}>
          <h2>Children 입니다.</h2>
        </Button>
      </main>
    </>
  );
}
