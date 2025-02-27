import { seedUsers } from './user-seeds.js';
import { seedRecipes } from './recipe-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');
      await seedUsers();
      console.log('\n----- USERS SEEDED -----\n');
      console.log('Seeding recipes...');
      await seedRecipes();
      console.log('\n----- RECIPES SEEDED -----\n');
  

    process.exit(0);
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
};

seedAll();
