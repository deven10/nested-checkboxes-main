import { useState } from "react";
import "./App.css";
import { Checkboxes } from "./components/Checkboxes";
import data from "./data.json";

function App() {
  const [checked, setChecked] = useState({});
  return (
    <>
      <Checkboxes data={data} checked={checked} setChecked={setChecked} />
    </>
  );
}

export default App;
