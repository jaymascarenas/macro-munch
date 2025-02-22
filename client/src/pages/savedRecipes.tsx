// Purpose: This file contains the savedRecipes component which displays the saved recipes of the user.
import RecipeCard from "../api/recipeApi";
import { useState} from "react";
import Recipe from "../interfaces/Recipe";
const SavedRecipe = () => {


    const [recipe, setRecipe] = useState<Recipe>();
    const GenerateSavedRecipes = () => {
        // fetch saved recipes from database
        // return saved recipes
        const handlesavedRecipeClick = (recipes: string) => {
            RecipeCard(recipes).then((data) => {
                const viewRecipe = data.meals[0];
                console.log(viewRecipe);
                setRecipe(viewRecipe);
            })
        }
        const savedRecipes = localStorage.getItem("recipe");
        const handleDeleteRecipe = (recipe: string) => {
          const savedRecipes = localStorage.getItem("recipe");
          if (savedRecipes) {
            const viableRecipe = JSON.parse(savedRecipes);
            const newRecipe = viableRecipe.filter(
              (item: string) => item !== recipe
            );
              localStorage.setItem("recipe", JSON.stringify(newRecipe));
              window.location.reload();
          }
            
        };
        if (savedRecipes) {
            const viableRecipe = JSON.parse(savedRecipes);
            return viableRecipe.map((recipe: string) => {
                return (
                    <div>
                        <a onClick={() => handlesavedRecipeClick(recipe)} id="recipeTag">{recipe}</a>
                        <button onClick={() => handleDeleteRecipe(recipe)}> delete Me</button>
                    </div>
                ) 
            })
        }
    }
     const handleIngredient = (ingredient: string) => {
       if (ingredient === "") {
         return;
       }
       console.log(ingredient);
     };
    return (
      <div className="sideBar">
        <h1 id="sideBar">Saved Recipes</h1>
        <ul className="viableRecipes">
          <GenerateSavedRecipes />
        </ul>
        {recipe ? (
          <>
            
              <h2 className="recipeName">{recipe.strMeal}</h2>
              <div className="cardContainer">
                <img
                  id="recipePic"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <div className="listContainer">
                  <h3>Ingredients</h3>
                  <ul id="ingredientsList">
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient1)}
                    >
                      {recipe.strIngredient1}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure1}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient2)}
                    >
                      {recipe.strIngredient2}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure2}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient3)}
                    >
                      {recipe.strIngredient3}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure3}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient4)}
                    >
                      {recipe.strIngredient4}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure4}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient5)}
                    >
                      {recipe.strIngredient5}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure5}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient6)}
                    >
                      {recipe.strIngredient6}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure6}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient7)}
                    >
                      {recipe.strIngredient7}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure7}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient8)}
                    >
                      {recipe.strIngredient8}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure8}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient9)}
                    >
                      {recipe.strIngredient9}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure9}</p>
                    <a
                      id="ingredient"
                      onClick={() => handleIngredient(recipe.strIngredient10)}
                    >
                      {recipe.strIngredient10}{" "}
                    </a>
                    <p id="ingredient">{recipe.strMeasure10}</p>
                  </ul>
                </div>
              </div>
              <div className="instructionSection">
                <p id="instructions">{recipe?.strInstructions}</p>
              </div>
              
            
          </>
        ) : (
          <></>
        )}
      </div>
    );
}

export default SavedRecipe;