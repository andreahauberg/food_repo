import { baseUrl } from "./info.js";

const defaultRecipes = 10;

const showRandomRecipesWithInnerHTML = (numRecipes = defaultRecipes) => {
  for (let index = 0; index < numRecipes; index++) {
    fetch(`${baseUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        data = data.meals[0];
        document.querySelector("#recipeList").innerHTML += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
      })
      .catch((error) => console.log(error));
  }
};

const showRandomRecipesWithInnerHTMLAndOnePageRefresh = async (
  numRecipes = defaultRecipes
) => {
  let recipeList = "";
  for (let index = 0; index < numRecipes; index++) {
    await fetch(`${baseUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        data = data.meals[0];
        recipeList += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
      })
      .catch((error) => console.log(error));

    document.querySelector("#recipeList").innerHTML = recipeList;
  }
};

const showRandomRecipesWithCreateElement = async (
  numRecipes = defaultRecipes
) => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < numRecipes; index++) {
    await fetch(`${baseUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        data = data.meals[0];

        const h2 = document.createElement("h2");
        h2.innerText = data.strMeal;

        const header = document.createElement("header");
        header.append(h2);

        const img = document.createElement("img");
        img.setAttribute("src", `${data.strMealThumb}/preview`);
        img.setAttribute("alt", data.strMeal);

        const pCategory = document.createElement("p");
        pCategory.classList.add("pill");
        pCategory.innerText = data.strCategory;

        const pArea = document.createElement("p");
        pArea.classList.add("pill");
        pArea.innerText = data.strArea;

        const div = document.createElement("div");
        div.append(pCategory);
        div.append(pArea);

        const article = document.createElement("article");
        article.append(header);
        article.append(img);
        article.append(div);

        fragment.append(article);
      })
      .catch((error) => console.log(error));
  }

  document.querySelector("#recipeList").append(fragment);
};

// fragment = in memory element not html element.

const showRandomRecipes = async (numRecipes = defaultRecipes) => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < numRecipes; index++) {
    await fetch(`${baseUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        data = data.meals[0];

        const card = document
          .querySelector("#recipeCard")
          .content.cloneNode(true);

        card.querySelector("h2").innerText = data.strMeal;

        const img = card.querySelector("img");
        img.setAttribute("src", `${data.strMealThumb}/preview`);
        img.setAttribute("alt", data.strMeal);

        card.querySelector(".pill:first-of-type").innerText = data.strCategory;
        card.querySelector(".pill:last-of-type").innerText = data.strArea;

        fragment.append(card);
      })
      .catch((error) => console.log(error));
  }

  document.querySelector("#recipeList").append(fragment);
};

showRandomRecipes();
