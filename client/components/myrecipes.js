export class myRecipes{

    constructor(){
        this.viewMyRecipes();
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
}