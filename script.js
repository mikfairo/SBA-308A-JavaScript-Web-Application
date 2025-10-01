async function initialLoad() {
  const tableDiv = document.getElementById("table-div");
  tableDiv.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1614548539924-5c1f205b3747?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

  const topHeader = document.createElement("h1");
  topHeader.textContent = "Whats for dinner?";
  tableDiv.appendChild(topHeader);

  const dishDiv = document.createElement("div");
  dishDiv.id = "dish-div";
  const [thumbnailUrl, mealName] = await getMealInfo(); //get a new thumbnail
  dishDiv.style.backgroundImage = thumbnailUrl; //to add the photo from link to the dish div
  tableDiv.appendChild(dishDiv);

  const dinnerButton = document.createElement("button");
  dinnerButton.style.fontSize = "medium";
  dinnerButton.textContent = "Randomize dinner";
  dinnerButton.addEventListener("click", async () => {
    const oldThumbnail = document.getElementById("dish-div");
    const newThumbnail = document.createElement("div");
    newThumbnail.id = "dish-div";
    const [thumbnailUrl, mealName] = await getMealInfo(); //get a new thumbnail
    newThumbnail.style.backgroundImage = thumbnailUrl;
    oldThumbnail.replaceWith(newThumbnail);

    const oldHeader = document.getElementById("detailHeader");
    const detailHeader = createAndStyleHeader(); //function from third.js
    let info = mealName;
    detailHeader.innerHTML = `${info}`;
    oldHeader.replaceWith(detailHeader);
  });
  tableDiv.appendChild(dinnerButton);
  const detailHeader = createAndStyleHeader();
  let info = mealName;
  detailHeader.innerHTML = `${info}`;
  document.body.appendChild(detailHeader);
}
async function getMealInfo() {
  //gets random string from api
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  console.log(data);
  const thumbnail = `url(${data.meals[0].strMealThumb})`;
  console.log(thumbnail);
  const mealName = data.meals[0].strMeal;
  console.log(mealName);
  return [thumbnail, mealName];
}

initialLoad();
secondaryLoad();

// const thumbnail = await initialLoad();
// const bkgDiv = document.getElementById("background-div");
// bkgDiv.style.backgroundImage= "url(https://images.unsplash.com/photo-1614548539924-5c1f205b3747?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

// const dishDiv = document.createElement("div")
// dishDiv.id = "dish-div"
// dishDiv.style.backgroundImage = (thumbnail);
// bkgDiv.appendChild(dishDiv);
