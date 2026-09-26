async function get(){
    const response= await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
    const data= await response.json();

    data.forEach(restaurant => { 
        document.querySelector("table").insertAdjacentHTML("beforeend", 
            `<tr class="restaurant">
                <td>${restaurant.name}</td>
                <td>${restaurant.phone}</td>
                <td>${restaurant.city}</td>
                <td>${restaurant.address}</td>
                <td>${restaurant.postalCode}</td>
                <td>${restaurant.location}</td>
                <td>${restaurant.company}</td>
                <td>${restaurant.companyId}</td>
                <td>${restaurant._id}</td>
            </tr>`
        )
        const btns= document.querySelectorAll(".restaurant");
        const btn= btns[btns.length -1]
        btn.addEventListener("click", () => {dailymenu(restaurant._id);});
    });

    console.log(data);
}
async function dailymenu(id){
    const response= await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/en`)
    const data= await response.json();
    
    console.log(data)

    const dialog= document.querySelector("dialog");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend",`<table class="courses"></table>`);

    const table= document.querySelector(".courses")
    data.courses.forEach(course=> {
        const {name, diets, price} = course;
        table.insertAdjacentHTML("beforeend", 
            `<tr>
                <td>${name}</td>
                <td>${diets}</td>
                <td>${price}</td>
            </tr>`
        )
    });
    dialog.insertAdjacentHTML(
        "beforeend",
        `<button class="close">Close</button>`
    );
    dialog.showModal();
    dialog.querySelector(".close").addEventListener("click", () => {dialog.close();});
}
get();