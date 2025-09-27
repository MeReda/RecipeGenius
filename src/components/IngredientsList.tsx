import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";

export default function IngredientsList(props) {
  const buttonRef = useRef(null);

  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>
      {ingredient}
      <FontAwesomeIcon
        className="fa-pull-end pointer"
        icon={faDeleteLeft}
        onClick={props.onClick}
        id={ingredient}
        ref={buttonRef}
      />
    </li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
