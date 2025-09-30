async function initialLoad() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();
    console.log(data);
}
initialLoad();
const bkgDiv = document.getElementById("background-div");
bkgDiv.style.backgroundImage= "url(https://images.unsplash.com/photo-1614548539924-5c1f205b3747?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

const dishDiv = document.createElement("div")
dishDiv.id = "dish-div"
bkgDiv.appendChild(dishDiv);