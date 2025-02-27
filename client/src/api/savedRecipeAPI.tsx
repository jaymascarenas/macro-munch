import { RecipeCardProps } from "../interfaces/Recipe";
import auth from '../utils/auth';




const retrieveRecipe = async (loggedInUser: number | null): Promise<RecipeCardProps | string> => {
    try {
      const response = await fetch(`/api/recipes/user/${loggedInUser}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getToken()}`,
        }
      });
      const data = await response.json();
      if(!response.ok) {
        throw new Error('Invalid recipe API response!')
      }
      return data;
    } catch (err) {
      console.log('error from data retrieval', err);
      return Promise.reject('Could not fetch recipe');
    }
}
  
const saveRecipe = async (
  loggedInUser: number,
  recipeName: string
): Promise<RecipeCardProps | string> => {
  console.log("saveRecipe", loggedInUser, recipeName);
  try {
    const response = await fetch(`/api/recipes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getToken()}`,
      },
      body: JSON.stringify({
        name: recipeName,
        UserId: loggedInUser,
        ingredients: [],
        description: "",
      }),
      
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Response not OK:", data); // Log the response data
      throw new Error("Invalid recipe API response!");
    }

    return data;
  } catch (err) {
    console.log("Error from data retrieval", err);
    return Promise.reject("Could not save recipe");
  }
};

export default { retrieveRecipe, saveRecipe };