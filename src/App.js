import Dropdown from "./components/Dropdown";
function App() {
  const options = [
    { label: "RED", value: "red" },
    { label: "GREEN", value: "green" },
    { label: "BLUE", value: "blue" },
  ];

  return <Dropdown options={options} />;
}

export default App;
