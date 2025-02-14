import { useState, useEffect } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
import type Car from '../interfaces/CarInterface'

const CarSearch = () => {
  const [allCarList, setCarList] = useState<Car[]> ([]);
  const [currentCarIndex, setCurrentCarIndex] = useState<number> (0);
  
  
  ({
    make: '',
    year: 0,
    model: '',
  });



  const newCar = () => {
    let parsedCar: Car[] = [];

  }

  return <h1>CarSearch</h1>;
};

export default CarSearch;