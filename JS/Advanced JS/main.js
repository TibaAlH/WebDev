import {restaurantRow, restaurantModal} from "./components.js";
import { fetchData } from "./utils.js";
import { baseUrl } from "./variables.js";

const get= async ()=>{
    try{
        const data= await fetchData();

    const sodexo = data.filter(
        restaurant => restaurant.company === "Sodexo"
    );

    sodexo.forEach(restaurant => { 
        const row= restaurantRow(restaurant)
        document.querySelector("table").appendChild(row);

        row.addEventListener("click", () => {dailymenu(restaurant);});
    });

    console.log(data);
    }
    catch(error){
        console.error(error);
        document.querySelector("table").innerHTML="<tr><td>Failed to load restaurants.</td></tr>";
    }
}
const dailymenu= async (restaurant) =>{
    const response= await fetch(baseUrl+`/daily/${restaurant._id}/en`)
    const menu= await response.json();
    
    const dialog= document.querySelector("dialog");
    dialog.innerHTML = restaurantModal(restaurant, menu);

    console.log(menu);
    console.log(menu.courses);
    console.log(Array.isArray(menu.courses));

    dialog.showModal();
    dialog.querySelector(".close").addEventListener("click", () => {dialog.close();});
}
get();
