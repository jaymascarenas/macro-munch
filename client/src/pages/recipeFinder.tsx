import React from 'react';
import RecipeCard from '../api/recipeApi';
import Recipe from '../interfaces/Recipe';
import SavedRecipe from './savedRecipes';

const RecipeFinder = () => {
  const [meal, setMeal] = React.useState<string>('');
  const [recipe, setRecipe] = React.useState<Recipe>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeal(e.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    RecipeCard(meal).then((data) => {
      if (data.meals === null ) {
        setRecipe(
          {
            strMeal: "No meal found",
            strMealThumb: "",
            strInstructions: "",
            strIngredient1: "",
            strMeasure1: "",
            strIngredient2: "",
            strMeasure2: "",
            strIngredient3: "",
            strMeasure3: "",
            strIngredient4: "",
            strMeasure4: "",
            strIngredient5: "",
            strMeasure5: "",
            strIngredient6: "",
            strMeasure6: "",
            strIngredient7: "",
            strMeasure7: "",
            strIngredient8: "",
            strMeasure8: "",
            strIngredient9: "",
            strMeasure9: "",
            strIngredient10: "",
            strMeasure10: "",
          }
        );
      } else
      { setRecipe(data.meals[0]); }
      console.log(SavedRecipe);
     });
  }
  const handleIngredient = (ingredient: string) => {
    if (ingredient === '') {
      return;
    }
    console.log(ingredient);
  }
  const readlocalStorage = () => {
    const savedRecipes = localStorage.getItem("recipe");
    if (savedRecipes) {
      return JSON.parse(savedRecipes);
    }
    return [];
  }
  const handleRecipeSave =  () => {
    const savedRecipes = readlocalStorage();
    if (recipe !== undefined) {
      savedRecipes.push(recipe.strMeal as string);
      localStorage.setItem("recipe", JSON.stringify(savedRecipes));
    }
  }
  return (
    <div>
      <div className="headContainer">
      <h1> Recipe Finder</h1>
      <p>Find a recipe and save it to your dashboard!</p>
      <form onSubmit={handleFormSubmit}>
        <input id="recipeForm"
          type="text"
          placeholder="Search for a recipe"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
        </form>
      </div>
      {recipe ? (
        <div>
          <div className="buttonContainer">
            <button onClick={() => handleRecipeSave() }><p>save Meal</p></button>
          </div>
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
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient1)}>
                  {recipe.strIngredient1}{" "}
                </a>
                <p id="ingredient">{recipe.strMeasure1}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient2)}>
                  {recipe.strIngredient2}{" "}
                </a>
                <p id="ingredient">{recipe.strMeasure2}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient3)}>
                  {recipe.strIngredient3}{" "}
                </a>
                <p id="ingredient">{recipe.strMeasure3}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient4)}>
                  {recipe.strIngredient4}{" "}
                </a>
                <p id="ingredient">{recipe.strMeasure4}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient5)}>
                  {recipe.strIngredient5} </a>
                <p id="ingredient">{recipe.strMeasure5}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient6)}>
                  {recipe.strIngredient6} </a>
                <p id="ingredient">{recipe.strMeasure6}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient7)}>
                  {recipe.strIngredient7} </a>
                <p id="ingredient">{recipe.strMeasure7}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient8)}>
                  {recipe.strIngredient8} </a>
                <p id="ingredient">{recipe.strMeasure8}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient9)}>
                  {recipe.strIngredient9} </a>
                <p id="ingredient">{recipe.strMeasure9}</p>
                <a id="ingredient" onClick={() => handleIngredient(recipe.strIngredient10)}>
                  {recipe.strIngredient10} </a>
                <p id="ingredient">{recipe.strMeasure10}</p>
              </ul>
            </div>
          </div>
          <div className="instructionSection">
            <p id="instructions">{recipe?.strInstructions}</p>
          </div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );

};
export default RecipeFinder;