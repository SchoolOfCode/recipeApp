import { useEffect, useState } from "react";

function RecipeViewer({randomNumber}){

    const [recipe, setRecipe] = useState("")

    async function getChickenRecipes() {
        const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=68360d25&app_key=d6bc07269824e506ee9fe4a8ae2ac134`)
        const data = await response.json()
        setRecipe(data)
        console.log(data)
    }
    
     useEffect(function(){getChickenRecipes()}, [])

     return recipe ?(
          <div id="recipe-viewer">
              <p>This is the name of your recipe<b> {recipe.hits[randomNumber].recipe.label}</b></p>
              <img src ={recipe.hits[randomNumber].recipe.image} alt = "Recipe"> 
              </img>
          </div>
     ):(<></>)


}
export default RecipeViewer;