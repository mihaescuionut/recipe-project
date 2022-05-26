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
}