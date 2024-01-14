import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "RED", value: "red" },
    { label: "GREEN", value: "green" },
    { label: "BLUE", value: "blue" },
  ];

  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
}

export default App;
