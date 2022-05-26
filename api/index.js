import express from "express";
import cors from 'cors';
import { createRecipe, getRecipes } from "./records.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get('/allRecipes', async(req, res)=>{
    let recipes = await getRecipes();
    res.json(recipes);
})

app.post('/createRecipe',async(req,res)=>{

    const rec={
        id: req.body.id,
        title: req.body.title,
        servings: req.body.servings,
        prepTime: req.body.prepTime,
        cookTime: req.body.cookTime,
        ingredients: req.body.ingredients,
        steps: req.body.steps
    }
    await createRecipe(rec);
    res.json(rec);
})

app.listen(3000, ()=>{ 
    console.log('ceva');
})