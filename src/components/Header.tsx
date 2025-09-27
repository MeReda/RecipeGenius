import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKitchenSet} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon className="fa-2x logo-icon" icon={faKitchenSet}/>
      <h1 className="header-text">RecipeGenius</h1>
    </header>
  );
}
