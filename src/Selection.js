import Jitu from "./jitu";
import "./Selection.css";

const Selection = (props) => {
  return (
    <>
      <div
        className="fix-box"
        onClick={() => {
          props.onClick(props.applyColor);
        }}
        style={{
          backgroundColor: props.applyColor
        }}
      ></div>
    </>
  );
};
export default Selection;
