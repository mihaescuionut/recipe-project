import { Api } from "./api.js";
import { myRecipes } from "./myrecipes.js";
import { newRecipe } from "./newrecipe.js";

export class Home{

    constructor(){
        this.viewHome();
        this.getRecipesForPopulate();
        this.filtersFct();
        this.favRecipes();
    }

    viewHome=()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `

                <div class="home_all_container"> 
                <div class="hdr">
                    <h2 class="lets_go_home"> Recipes Book </h2>
                    <i class="fa-solid fa-kitchen-set"></i>
                    
                    <div class="menu">
                        <a href="#">My Recipes</a>
                        <a href="#">My Favourites</a>
                        <a href="#" class="recipe">New Recipe</a>
                    </div>
            
                    <i class="fa-solid fa-right-to-bracket"></i>
                </div>
            
                <div class="main">
            
                    <div class="filters">
                        <button class="clear_filters_button">Clear All</button>
            
                        <input type="text"  class="recipe_keyword_filter" placeholder="Recipe Keyword">
                        <input type="text"  class="category_filter" placeholder="Category">
                        <input type="text"  class="ingredient_filter" placeholder="Ingredient"> 
            
                        <button class="show_filter_results">Show Filters</button>
                    </div>
            
            
            
                    <div class="all_recipes">
                        <div class="recipe_card">
                            <i class="bi bi-heart"></i>
                            <div class="stars_review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h3>Recipe Title</h3>
                            <img alt="recipe picture">
                        </div>
            
                        <div class="recipe_card">
                            <i class="bi bi-heart"></i>
                            <div class="stars_review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h3>Recipe Title</h3>
                            <img alt="recipe picture">
                        </div>
            
                        <div class="recipe_card" style="border: none">
                            <i class="bi bi-heart"></i>
                            <div class="stars_review">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <h3>Recipe Title</h3>
                            <img alt="recipe picture">
                        </div>
                    </div>
            
            
                </div>
            </div>
        
        
        `
        this.hdr = document.querySelector('.hdr');
        this.hdr.addEventListener("click", (e)=>{
            let el = e.target;
            // console.log(el.textContent);

            
            if(el.classList.contains("lets_go_home")){
                location.reload();
            }
            if(el.classList.contains("recipe")){
                let nrcp = new newRecipe();
                nrcp.viewNewRecipe();
            }else if(el.textContent == "My Recipes"){
                let rcp = new myRecipes();
                rcp.viewMyRecipes();
            }
        })

        this.filters = document.querySelector('.filters');
        this.filters.addEventListener("click", (e)=>{
            let el = e.target;
            
        })

    }

    async filtersFct(){
        let api = new Api();
        let allRecipes = await api.getAllRecipes();

        let filters = document.querySelector('.filters');
        filters.addEventListener('click', (e)=>{
           let el = e.target;
           

            if(el.textContent == "Show Filters"){

                let recipeKeyword = document.querySelector('.recipe_keyword_filter').value;
                let categoryFilter = document.querySelector('.category_filter').value;
                let ingredientFilter = document.querySelector('.ingredient_filter').value;
                
                
                allRecipes.forEach(element=>{
                    let filterRecipes = [];
                    if(element.title.includes(recipeKeyword)){
                        filterRecipes.push(element);
                        this.populateRecipes(filterRecipes);
                    }
                    
                })

            }else if(el.textContent == "Clear All"){
                let recipeKeyword = document.querySelector('.recipe_keyword_filter');
                let categoryFilter = document.querySelector('.category_filter');
                let ingredientFilter = document.querySelector('.ingredient_filter');

                recipeKeyword.value = "";
                categoryFilter.value = "";
                ingredientFilter.value = "";
                
                location.reload();
                
            }
       });
    }

    async getRecipesForPopulate(){

        let api = new Api();
        let allRecipes = await api.getAllRecipes();
        console.log(allRecipes);
        this.populateRecipes(allRecipes);
        
    }

    populateRecipes(arr){

        let recipesDiv = document.querySelector('.all_recipes');
        recipesDiv.innerHTML = "";
        
        arr.forEach(e=>{

            recipesDiv.innerHTML += `
            
                <div id=${e.id} class="recipe_card">
                    <i class="bi bi-heart"></i>
                    <div class="stars_review">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <h3>${e.title}</h3>
                    <img alt="recipe picture">
                </div>
            
            `

        })
    }

    async favRecipes(){
        let api = new Api();
        let recipes = await api.getAllRecipes();
        let allRecipes = document.querySelector('.all_recipes');
        let arr = [];

        allRecipes.addEventListener('click', (e)=>{
            let el = e.target;

            if(el.classList.contains('bi-heart')){

                recipes.forEach(e=>{
                    if(e.id == el.parentNode.id){
                        arr.push(e);
                    }
                })

            }else if(el.classList.contains('fa-star')){

                el.classList = "";
                el.classList = "fa fa-star checked";
            }

        })


        return arr;
    }

}