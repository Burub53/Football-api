import db from "../db/connetion.js"
import footballData from "../db/football-data.json" assert {type: "json"}
import footballSchema from "../models/football.js"


const insertData = async () => {
    await db.dropDatabase();
    await footballSchema.insertMany(footballData);
    db.close();
  };
  
  insertData();
