import "./styles.css";
import ColourSelector from "./Selection";
import { useState } from "react";
import subheading1 from "./child1";
import Jitu from "./jitu";

export default function App() {
  const [color, setColor] = useState("");
  function updateColor(color) {
    setColor(color);
  }
  return (
    <>
      <div className="color-container">
        <ColourSelector applyColor="red" onClick={updateColor} />
        <ColourSelector applyColor="green" onClick={updateColor} />
        <ColourSelector applyColor="blue" onClick={updateColor} />
      </div>
      <div
        className="target-div"
        style={{
          backgroundColor: color
        }}
      ></div>
    </>
  );
}
