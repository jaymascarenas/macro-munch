import { RecipeCardProps } from "../interfaces/Recipe";
import auth from '../utils/auth';

const loggedInUser = auth.getProfile().id;
console.log(loggedInUser);


const retrieveRecipe = async (loggedInUser: number | null): Promise<RecipeCardProps | string> => {
    try {
      const response = await fetch(`/api/recipes/user:${loggedInUser}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer${auth.getToken()}`
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