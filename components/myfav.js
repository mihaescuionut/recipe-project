import { Api } from "./api.js";
import { Home } from "./home.js";

export  class myFavourites{

    constructor(){
        this.viewMyFav();
        this.populateFavourites();
        this.delFavRec();
        
    }


    viewMyFav(){

        let container = document.querySelector('.container');
        
        container.innerHTML = `
        <div class="fav_container">

        <div class="hdr">
            <h2> Recipes Book </h2>
            
            <div class="menu">
                <a href="#">My Recipes</a>
                <a href="#">New Recipe</a>
            </div>
    
            <i class="fa-solid fa-right-to-bracket"></i>
        </div>

        <div class="fav_recipes">

            <div class="my_fav_card">

                <i class="fa-regular fa-trash-can"></i>
                
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

        </div>




    </div>
        
        `

    }

    async populateFavourites(){

        let favRecipes = document.querySelector('.fav_recipes');
        favRecipes.innerHTML = "";
        
        let apiFav = new Api();
        let favRec = await apiFav.getFavRecipes();
        
        this.populateFavRecipes(favRec);


        

    }
    
    populateFavRecipes(arr){

        let favRecipesDiv = document.querySelector('.fav_recipes');
        favRecipesDiv.innerHTML = "";
        
        arr.forEach(e=>{

            favRecipesDiv.innerHTML += `
            
            <div class="my_fav_card" id=${e.id}>

            <i class="fa-regular fa-trash-can"></i>
            
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

    async delFavRec(){
        let api = new Api();
        let fav = api.getFavRecipes();
        console.log('sal');

        let favRecipes = document.querySelector('.container');
        favRecipes.addEventListener('click', (e=>{
            let el = e.target;
            if(el.classList.contains("fa-regular")){
                let parent = el.parentNode;
                let id = parent.id;
                api.deleteFavRecipe(id);
            }
        }))

    }
}