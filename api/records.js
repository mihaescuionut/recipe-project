import fs from "fs";

// *************************************** my recipes ****************************************


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

// *************************************** my recipes ****************************************



export async function createRecipe(recipe){
    const allRecipes = await getRecipes();
    allRecipes.push(recipe);
    await saveRecipes(allRecipes);
    return recipe;
}


// *************************************** my recipes ****************************************


export function getFavRecipes(){

    return new Promise((resolve, reject)=>{
        fs.readFile('api/fav.json', 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else(
                resolve(JSON.parse(data))
            )
        })
    })
}

function saveFavRecipes(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile('api/fav.json', JSON.stringify(data,null, 2), (err)=>{
            if(err){
                reject(err)
            }else{
                resolve([])
            }
        })
    })
}

// *************************************** my recipes ****************************************


export async function addFavRecipe(id){
    let recipes = await getRecipes();
    let arr = await getFavRecipes();

    recipes.forEach(e=>{
        if(e.id == id){
            arr.push(e);
        }
    })
    
    await saveFavRecipes(arr);

    console.log(arr);
    return arr;
}

export async function deleteFavRecipe(id){
    let fav = await getFavRecipes();
    fav=fav.filter(e=>e.id!=id);
    await saveFavRecipes(fav);
}


// *************************************** my recipes ****************************************


export function getMyRecipes(){

    return new Promise((resolve, reject)=>{
        fs.readFile('api/myrec.json', 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else(
                resolve(JSON.parse(data))
            )
        })
    })
}

function saveMyRecipes(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile('api/myrec.json', JSON.stringify(data,null, 2), (err)=>{
            if(err){
                reject(err)
            }else{
                resolve([])
            }
        })
    })
}




