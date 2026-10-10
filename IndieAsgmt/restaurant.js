async function get(){
    const response= await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
    const data= await response.json();

    data.forEach(restaurant => { 
        document.querySelector(".restaurant-box").insertAdjacentHTML("beforeend", 
            `<div class="restaurant-card">
                <h2>${restaurant.name}</h2>
                <h3>${restaurant.address}, ${restaurant.city}</h3>
                <div class="dailybtn">Daily menu</div>
                <div class="weeklybtn">Weekly menu</div>
            </div>`
        )
        const cards = document.querySelectorAll(".restaurant-card");
        const currentCard = cards[cards.length - 1];

        const dailybtn= currentCard.querySelector(".dailybtn");
        const weeklybtn= currentCard.querySelector(".weeklybtn");

        dailybtn.addEventListener("click", () => {dailymenu(restaurant);});
        weeklybtn.addEventListener("click", () => {weeklyMenu(restaurant);});
    });

    console.log(data);
}

async function dailymenu(restaurant){
    const response= await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`)
    const data= await response.json();
    
    console.log(data)
    const {name, address, postalCode, phone, city, company} = restaurant;

    const { courses } = data;
    let menuHTML = "";
    
    courses.forEach(course=> {
        const {name, diets, price} = course;
        menuHTML+= `<tr>
        <td>${name}</td>
        <td>${diets}</td>
        <td>${price}</td>
        </tr>`
        
    });
    const html = `
        <h2>${name}</h2>
        <p>${address}, ${postalCode} ${city}</p>
        <p>${phone}</p>
        <p>${company}</p>

        <table class="courses">
            <tr>
                <th>Course</th>
                <th>Diets</th>
                <th>Price</th>
            </tr>

            ${menuHTML}
        </table>

        <button class="close">Close</button>
    `;
    const dialog= document.querySelector("dialog");
    dialog.innerHTML = html;

    dialog.showModal();
    dialog.querySelector(".close").addEventListener("click", () => {dialog.close();});
}

async function weeklyMenu(restaurant){
    const response= await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${restaurant._id}/en`)
    const data= await response.json();
    
    console.log(data)
    const {name, address, postalCode, phone, city, company} = restaurant;

    const {days} = data;
    let menuHTML = "";
    
    days.forEach(day=> {
        const {date, courses} = day;

        menuHTML+= `
            <tr>
                <th>${date}</th>
            </tr>`;

        courses.forEach(course => {
            const {name, diets, price} = course;
            menuHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${diets}</td>
                    <td>${price}</td>
                </tr>
            `;
        });
    });
    const html = `
        <h2>${name}</h2>
        <p>${address}, ${postalCode} ${city}</p>
        <p>${phone}</p>
        <p>${company}</p>

        <table class="courses">
            <tr>
                <th>Course</th>
                <th>Diets</th>
                <th>Price</th>
            </tr>

            ${menuHTML}
        </table>

        <button class="close">Close</button>
    `;
    const dialog= document.querySelector("dialog");
    dialog.innerHTML = html;

    dialog.showModal();
    dialog.querySelector(".close").addEventListener("click", () => {dialog.close();});
}

get();