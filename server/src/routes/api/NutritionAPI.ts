import express from 'express';
import type { Request, Response } from 'express';

//make fetch to nutrition API
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