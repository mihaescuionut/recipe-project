import { Api } from "./api.js";


export class newRecipe{
    constructor(){
        this.viewNewRecipe();

        
    }


    viewNewRecipe=()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `
        
        <div class="newrecipe_all_container">

        <div class="hdr">
            <h2> Recipes Book </h2>
            
            <div class="menu">
                <a href="#">My Recipes</a>
                <a href="#">My Favourites</a>
                <a href="#">New Recipe</a>
            </div>
    
            <i class="fa-solid fa-right-to-bracket"></i>
        </div>

        <div class="new_recipe_container">

            <div class="first_recipe_details">

                <div class="title_div">
                    <p>Title</p>
                    <input type="text" class="title_input" placeholder="Title">
                </div>

                <div class="Image_div">
                    <p>Image Url</p>
                    <input type="text" class="image_input" placeholder="Img url">
                    <i class="fa-solid fa-upload"></i>
                </div>

                <div class="yield_div">
                    <p>Yield</p>
                    <input type="text" class="servings_input" placeholder="Yield">
                </div>

            </div>

            <div class="second_recipe_details">

                <div class="ingredients_div">
                    <p>Ingredients</p>
                    <input type="text" class="ingredients_input" placeholder="Ingredients">
                    <i class="fa-solid fa-plus"></i>
                </div>

                <div class="cooking_div">
                    <p>Cooking time</p>
                    <input type="text" class="cooking_input" placeholder="Cooking time">
                </div>

                <div class="prep_div">
                    <p>Prep time</p>
                    <input type="text" class="prep_input" placeholder="Prep time">
                </div>

            </div>

            <div class="tags_recipe_details">

                <p>Tags</p>
                <div>
                    <input type="radio" id="dinner" name="drone" value="dinner">
                    <label for="dinner">Dinner</label>
                </div>

                <div>
                    <input type="radio" id="healthy" name="drone" value="healthy">
                    <label for="healthy">Healthy</label>
                </div>

                <div>
                    <input type="radio" id="salty" name="drone" value="Salty">
                    <label for="Salty">Salty</label>
                </div>

                <div>
                    <input type="radio" id="sweet" name="drone" value="sweet">
                    <label for="sweet">Sweet</label>
                </div>

                <div>
                    <input type="radio" id="italian" name="drone" value="italian">
                    <label for="italian">Italian</label>
                </div>

                <div>
                    <input type="radio" id="lunch" name="drone" value="lunch">
                    <label for="lunch">Lunch</label>
                </div>

                <div>
                    <input type="radio" id="breakfast" name="drone" value="breakfast">
                    <label for="breakfast">Breakfast</label>
                </div>

            </div>

        </div>

        <div class="save_recipe_container">

            <div class="steps_container">
                <p>Steps</p>
                <input type="text" class="steps_input">
            </div>

            <div class="buttons_div">
                <button class="cancel">CANCEL</button>
                <button class="save">SAVE</button>
            </div>


        </div>
        

    </div>
        
        `

        this.newRecipeContainer = document.querySelector('.newrecipe_all_container');
        this.newRecipeContainer.addEventListener('click', (e)=>{
            let el = e.target;
            if(el.textContent == "SAVE"){
                this.newRecipe();
            }else if(el.textContent == "CANCEL"){
                location.reload();
            }
        });
    }

    newRecipe(){

        let title = document.querySelector('.title_input').value;
        let servings = document.querySelector('.servings_input').value;
        let ingredients = document.querySelector('.ingredients_input').value;
        let cooking = document.querySelector('.cooking_input').value;
        let prep = document.querySelector('')
        let tags = document.querySelector('.tags_recipe_details');
        let steps = document.querySelector('.steps_input').value;

        let rcp = {
            id: Math.floor(Math.random()*100),
            title: title,
            servings: servings,
            prepTime: prep,
            cookTime: cooking,
            ingredients: ingredients,
            tag: tags,
            steps: steps
        }

        let recipe = new Api();
        recipe.crateRecipe(rcp);

    }

}