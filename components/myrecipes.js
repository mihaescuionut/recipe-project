import { Api } from "./api.js";

export class myRecipes{

    constructor(){
        this.viewMyRecipes();
        this.getMyRecipesForPopulate();
    }


    viewMyRecipes=()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `

            <div class="myrecipes_all_container">

            <div class="hdr">
                <h2> Recipes Book </h2>
                
                <div class="menu">
                    <a href="#">My Favourites</a>
                    <a href="#">New Recipe</a>
                </div>
        
                <i class="fa-solid fa-right-to-bracket"></i>
            </div>

            <div class="my_recipes_container">

                <div class="my_recipes_card">

                    <div class="my_recipes_edit_and_delete">
                        <i class="fa-solid fa-pencil"></i>
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                
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

    async getMyRecipesForPopulate(){
        let api = new Api();
        let myRec = await api.getMyRecipes();
        myRec = myRec.json();
        // myRec = JSON.parse(myRec);
        console.log(myRec);
        let myRecipesDiv = document.querySelector('.my_recipes_container');
        myRecipesDiv.innerHTML = "";

        // myRec.forEach(e=>{

        //     myRecipesDiv.innerHTML += `
            
        //     <div class="my_recipes_card id=${e.id}">

        //     <div class="my_recipes_edit_and_delete">
        //         <i class="fa-solid fa-pencil"></i>
        //         <i class="fa-regular fa-trash-can"></i>
        //     </div>
        
        //     <div class="stars_review">
        //         <span class="fa fa-star checked"></span>
        //         <span class="fa fa-star checked"></span>
        //         <span class="fa fa-star checked"></span>
        //         <span class="fa fa-star"></span>
        //         <span class="fa fa-star"></span>
        //     </div>
        //     <h3>${e.title}</h3>
        //     <img alt="recipe picture">


        // </div>
            
        //     `

        // })
    }
}