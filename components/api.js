export class Api{

    api(path, method='GET', body=null, requiresAuth=false, credentials=null){
        const url = 'http://localhost:3000/'+path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8', 
            },
        }
            if(body){
                options.body=JSON.stringify(body);
            }
            if(requiresAuth){
            }
            return fetch(url,options);
    }

    async getAllRecipes(){
        let allRecipes = await this.api('allRecipes');
        return allRecipes.json();
    }

    async crateRecipe(recipe){

        let data = await this.api('createRecipe','POST', recipe);
        return data;

    }

    async getFavRecipes(){
        let favRecipes = await this.api('getFavRecipes');
        return favRecipes.json();
    }

    async addFavRecipe(id){
        let recipe = await this.api(`add/${id}`, 'PUT');
        return recipe;
    }

    async deleteFavRecipe(id){
        let recipe = await this.api(`delete/${id}`, 'DELETE');
        return recipe;
    }

    async getMyRecipes(){
        let myRec = await this.api('myRecipes', 'GET');
        return myRec;
    }
}