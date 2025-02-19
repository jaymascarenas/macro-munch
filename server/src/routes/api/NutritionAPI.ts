import express from 'express';
import type { Request, Response } from 'express';
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

  
// } catch (err) {
//   console.log("Unable to retrieve data", err);
//   return Promise.reject("Could not fetch nutritional facts");
// }
const router = express.Router();
// GET /users/:id - Get a user by id
router.get('/:food', async (req: Request, res: Response) => {
  const { food } = req.params;
  try {
  const response = await fetch(
    `${process.env.USDA_BASE_URL_API}/foods/search?api_key=${process.env.USDA_API_KEY}&query=${food}`
  );
const data = await response.json();
  return data;
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});