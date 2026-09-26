const restaurantRow = (restaurant)=> {
    const {name, company}= restaurant;
    const tr= document.createElement("tr");
    tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>`;

    return tr;
}
const restaurantModal = (restaurant, menu) => {
    const {name, address, postalCode, phone, city, location, company, companyId, _id}= restaurant;
    const {courses} = menu;
    let menuHTML= "";
    courses.forEach(course => {
        const { name, diets, price } = course;

        menuHTML += `
            <tr>
                <td>${name}</td>
                <td>${diets}</td>
                <td>${price}</td>
            </tr>`;
    });
    const html = `
    <h2>${name}</h2>
    <p>${address}, ${postalCode} ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    <table>
        <tr>
            <th>Course</th>
            <th>Diets</th>
            <th>Price</th>
        </tr>
        ${menuHTML}
    </table>
    <button class="close">Close</button>`;
    return html;
}

export{restaurantRow, restaurantModal};
