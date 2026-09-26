import {restaurantRow, restaurantModal} from "./components.js";
import { fetchData } from "./utils.js";
import { baseUrl } from "./variables.js";

const get= async ()=>{
    const data= await fetchData();

    data.forEach(restaurant => { 
        const row= restaurantRow(restaurant)
        document.querySelector("table").appendChild(row);

        row.addEventListener("click", () => {dailymenu(restaurant);});
    });

    console.log(data);
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
