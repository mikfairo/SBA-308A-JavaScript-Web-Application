async function secondaryLoad() {
    const bkgDiv = document.getElementById("background-div");
  bkgDiv.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1600294421265-c354b772e790?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

const response = await fetch(   
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  console.log(data);
    const secondThumbnail = `url(${data.drinks[0].strDrinkThumb})`;
  console.log(secondThumbnail);
  const drinkDiv = document.createElement("div");
  drinkDiv.id = "drink-div";
  drinkDiv.style.backgroundImage = secondThumbnail;  
  const tableDiv = document.getElementById("table-div");
  tableDiv.appendChild(drinkDiv); 
}
