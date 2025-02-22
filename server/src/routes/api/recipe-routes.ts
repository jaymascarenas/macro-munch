import express from 'express';
import type { Request, Response } from 'express';
import { Recipe, User } from '../../models/index.js';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
      const recipes = await Recipe.findAll({
        include: [ {model: User} ],
    });
      res.json(recipes);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });



router.get('/:id', async (req: Request, res: Response) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id, {
        include: [{ model: User }],
      });

      if (!recipeData) {
        res.status(404).json({ message: 'No recipe was found with that id!'});
      }

      res.status(200).json(recipeData);
    } catch(err) {
      res.status(500).json(err);
    }
  });

  export {router as recipeRouter};