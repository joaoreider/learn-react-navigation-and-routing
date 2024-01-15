import Link from "./components/Link";
function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go to Accordion</Link>
      <Link to={"/dropdown"}>Go to DropDown</Link>
    </div>
  );
}

export default App;
