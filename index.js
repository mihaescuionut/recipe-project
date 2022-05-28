import express from "express";
import cors from 'cors';
import { addFavRecipe, createRecipe, deleteFavRecipe, getFavRecipes, getMyRecipes, getRecipes } from "./records.js";

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



app.get('/getFavRecipes', async(req, res)=>{
    let favRecipes = await getFavRecipes();
    res.json(favRecipes);
})

app.put('/add/:id', async (req,res)=>{
    const id = req.params.id;
    await addFavRecipe(id);
    res.json(id);
})

app.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    await deleteFavRecipe(id);
    res.json(id);
})


app.get('/myRecipes', async (req,res)=>{
    let myRec = await getMyRecipes();
    res.json(myRec);
    console.log(myRec);
})





app.listen(3000, ()=>{ 
    console.log('ceva');
})