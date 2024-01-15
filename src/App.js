import Link from "./components/Link";
import Route from "./components/Route";
import AcordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go to Accordion</Link>
      <Link to={"/dropdown"}>Go to DropDown</Link>
      <div>
        <Route path="/accordion">
          <AcordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
