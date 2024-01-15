import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClink = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClink}>{children}</a>;
}

export default Link;
