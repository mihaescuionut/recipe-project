import fs from "fs";


export function getRecipes(){

    return new Promise((resolve, reject)=>{
        fs.readFile('api/data.json', 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else(
                resolve(JSON.parse(data))
            )
        })
    })
}

function saveRecipes(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile('api/data.json', JSON.stringify(data,null, 2), (err)=>{
            if(err){
                reject(err)
            }else{
                resolve([])
            }
        })
    })
}

export async function createRecipe(recipe){
    const allRecipes = await getRecipes();
    allRecipes.push(recipe);
    await saveRecipes(allRecipes);
    return recipe;
}
