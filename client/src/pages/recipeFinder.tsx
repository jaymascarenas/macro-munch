import React from 'react';
import RecipeCard from '../api/recipeApi';
import Recipe from '../interfaces/Recipe';
const RecipeFinder = () => {

  const [meal, setMeal] = React.useState<string>('');
  const [recipe, setRecipe] = React.useState<Recipe>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeal(e.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    RecipeCard(meal).then((data) => {
      if (data.meals !== null) {
        setRecipe(data.meals[0]);
        console.log(data.meals[0]);
      } else {
        setRecipe({
          strMeal: "No meal found",
          strIngredient1: '',
          strIngredient2: '',
          strMeasure2:'',
          strIngredient3: '',
          strMeasure3: '',
          strIngredient4: '',
          strMeasure4: '',
          strIngredient5: '',
          strMeasure5: '',
          strIngredient6: '',
          strMeasure6: '',
          strIngredient7: '',
          strMeasure7: '',
          strIngredient8: '',
          strMeasure8: '',
          strIngredient9: '',
          strMeasure9: '',
          strIngredient10: '',
          strMeasure10: '',
        });
      }
      })
  }
  const handleIngredient = (ingredient: string) => {
    if (ingredient === '') {
      return;
    }
    console.log(ingredient);
   }
  return (
    <div>
      <h1> Recipe Finder</h1>
      <p>Find a recipe and save it to your dashboard!</p>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Search for a recipe"
          onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {recipe ? (
        <div>
          <h2 className="recipeName">{recipe.strMeal}</h2>
          <div className="cardContainer">
            <img id="recipePic" src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="listContainer">
              <h3>Ingredients</h3>
              <ul id="ingredientsList">
                <a onClick={() => handleIngredient(recipe.strIngredient1)}>{recipe.strIngredient1} </a>
                <p>{recipe.strMeasure1}</p>
                <a>{recipe.strIngredient2} </a>
                <p>{recipe.strMeasure2}</p>
                <a>{recipe.strIngredient3} </a>
                <p>{recipe.strMeasure3}</p>
                <a>{recipe.strIngredient4} </a>
                <p>{recipe.strMeasure4}</p>
                <a>{recipe.strIngredient5} </a>
                <p>{recipe.strMeasure5}</p>
                <a>{recipe.strIngredient6} </a>
                <p>{recipe.strMeasure6}</p>
                <a>{recipe.strIngredient7} </a>
                <p>{recipe.strMeasure7}</p>
                <a>{recipe.strIngredient8} </a>
                <p>{recipe.strMeasure8}</p>
                <a>{recipe.strIngredient9} </a>
                <p>{recipe.strMeasure9}</p>
                <a>{recipe.strIngredient10} </a>
                <p>{recipe.strMeasure10}</p>
              </ul>
            </div>
          </div>
          <div className="instructionSection">
            <p id="instructions">{recipe?.strInstructions}</p>
          </div>
          <div>
         
          </div>
        </div>
      ) : (
        <div>
          <h2>Search for a recipe</h2>
        </div>
      )}
      </div>
  );

};
export default RecipeFinder;