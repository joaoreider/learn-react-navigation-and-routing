import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
function App() {
  return (
    <div>
      <div>
        <Button primary rounded className="m-2">
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoBell />
          secondary
        </Button>
      </div>
      <div>
        <Button success>
          {" "}
          <GoCloud />
          success{" "}
        </Button>
      </div>
      <div>
        <Button warning>
          {" "}
          <GoDatabase />
          warning{" "}
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          {" "}
          danger{" "}
        </Button>
      </div>
    </div>
  );
}

export default App;
