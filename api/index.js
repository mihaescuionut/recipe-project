import express from "express";
import cors from 'cors';
import { getRecipes } from "./records.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get('/allRecipes', async(req, res)=>{
    let recipes = await getRecipes();
    res.json(recipes);
})


app.listen(3000, ()=>{
    console.log('ceva');
})