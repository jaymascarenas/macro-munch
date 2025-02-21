import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../models/index.js';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
      const recipes = await Recipe.findAll();
      res.json(recipes);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

// router.post('/', async (req: Request, res: Response) => {
//     try{
//           const { name, ingredients, description } = req.body;

//           if (!name || !Array.isArray(ingredients) || !description) {
//             return res.status(400).json({message: '400 error. Missing information'});
//           }
//               const newSavedRecipe = await Recipe.create({
//                 name,
//                 ingredients,
//                 description
//               });
//     } catch (error: any) {
//       res.status(500).json({message: error.message});
//     }
//   });
  export {router as recipeRouter};