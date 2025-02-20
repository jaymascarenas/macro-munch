interface NutritionFacts {
        dataType: string;
        description: string;
        fdcId: number;
        foodNutrients: foodNutrients[];
    
        // "publicationDate": "4/1/2019",
        // "brandOwner": "Kar Nut Products Company",
        // "gtinUpc": "077034085228",
        // "ndbNumber": 7954,
        // "foodCode": "27415110"
      }

interface foodNutrients {
            number: number;
            vitamins: string;
            amount: number;
            unitName: string;
            derivationCode: string;
            derivationDescription: string;
          }
