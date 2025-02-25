import { RecipeCardProps } from "../interfaces/Recipe";

const retrieveRecipe = async (id: number | null): Promise<RecipeCardProps | string> => {
    try {
      const response = await fetch(`/api/recipes/user/${id}`, {
        headers: {
          'Content-Type': 'application/json',
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

  export default retrieveRecipe ;