import { baseUrl } from "./info.js";

const defaultRecipes = 10;

const showRandomRecipes = (numRecipes = defaultRecipes) => {
  for (let index = 0; index < numRecipes; index++) {
    fetch(`${baseUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        data = data.meals[0];
        document.querySelector("#recipeList").innerHTML += `
            <article>
                <header>
                    <h3>${data.strMeal}</h3>
                </header>
                <img src="${data.strMealThumb}/preview" alt="${data.strMeal}" />
                <div>
                    <p class = "pill">${data.strCategory}</p>
                    <p class = "pill">${data.strArea}</p>
                </div>
        </article>
            `;
      })
      .catch((error) => console.log(error));
  }
};

showRandomRecipes();
