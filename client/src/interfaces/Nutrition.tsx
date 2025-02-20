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

// example if output in insomnia
/*
{
  "fdcId": 1926811,
  "description": "CHEDDAR CHEESE",
  "dataType": "Branded",
  "gtinUpc": "841111000769",
  "publishedDate": "2021-07-29",
  "brandOwner": "Makeup Geek, LLC",
  "brandName": "LONDONER",
  "ingredients": "CULTURED PASTEURIZED MILK, SALT, VEGETARIAN RENNET.",
  "marketCountry": "United States",
  "foodCategory": "Cheese",
  "modifiedDate": "2018-08-15",
  "dataSource": "LI",
  "packageWeight": "198 g/7 oz",
  "servingSizeUnit": "g",
  "servingSize": 28.0,
  "householdServingFullText": "1 ONZ",
  "tradeChannels": [
    "NO_TRADE_CHANNEL"
  ],
  "allHighlightFields": "",
  "score": 1001.6148,
  "microbes": [],
  "foodNutrients": [
    {
      "nutrientId": 1003,
      "nutrientName": "Protein",
      "nutrientNumber": "203",
      "unitName": "G",
      "derivationCode": "LCCS",
      "derivationDescription": "Calculated from value per serving size measure",
      "derivationId": 70,
      "value": 25.0,
      "foodNutrientSourceId": 9,
      "foodNutrientSourceCode": "12",
      "foodNutrientSourceDescription": "Manufacturer's analytical; partial documentation",
      "rank": 600,
      "indentLevel": 1,
      "foodNutrientId": 23917826,
      "percentDailyValue": 15
    },
*/