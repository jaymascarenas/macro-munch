// Purpose: This file contains the savedRecipes component which displays the saved recipes of the user.
import RecipeCard from "../api/recipeApi";
import  fetchRecipe  from "./recipeFinder";
const savedRecipes = () => {

    const GenerateSavedRecipes = () => {
        // fetch saved recipes from database
        // return saved recipes
        const handlesavedRecipeClick = (recipe: string) => {
            RecipeCard(recipe).then((data) => {
                const viewRecipe = data.meals[0];
                console.log(viewRecipe);
                fetchRecipe(viewRecipe);
            })
         }
       const savedRecipes = localStorage.getItem("recipe");
        if (savedRecipes) {
            const viableRecipe = JSON.parse(savedRecipes);
            return viableRecipe.map((recipe: string) => {
                return (
                    
                    <a onClick={() => handlesavedRecipeClick(recipe) } id="recipeTag">{recipe}</a>
                    
                ) 
            })
           
        }
    }
    return (
        <div className="sideBar">
            <h1 id="sideBar">Saved Recipes</h1>
            <ul className ="viableRecipes">
                <GenerateSavedRecipes />
            </ul>

        </div>
    )
}

export default savedRecipes;