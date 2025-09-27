import { useState, useRef } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../../ai.ts";
import Loader from "./Loader.tsx";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipeSection = useRef(null);

  async function getRecipe() {
    // scrolling into get-recipe-container to show the loading element
    const getRecipeContainer = document.querySelector(".get-recipe-container");
    getRecipeContainer?.scrollIntoView({ behavior: "smooth" });

    setIsLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown ?? "");
    setIsLoading(false);
  }

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient") as string;
    setIngredients((prevIngredients: string[]) => [
      ...prevIngredients,
      newIngredient,
    ]);
  }

  interface RemoveIngredientEvent {
    currentTarget: {
      id: string;
    };
  }

  function removeIngredient(ref: RemoveIngredientEvent) {
    setIngredients(ingredients.filter((e) => e !== ref.currentTarget.id));
  }

  return (
    <main>
      <p className="main-paragraph">
        RecipeGenius transforms your available ingredients into delicious
        recipes. Just enter what you have, and our Ai chef creates
        easy-to-follow dishes, making cooking simple, creative, and waste-free!
      </p>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          onClick={removeIngredient}
        />
      )}

      {isLoading && <Loader />}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
