async function getmap(){
    const response = await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
    const data = await response.json();


    const map = L.map('map').setView([60.1699, 24.9384], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'}).addTo(map);

    data.forEach(restaurant =>{
        const [lng, lat] = restaurant.location.coordinates;

        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`
        <h3>${restaurant.name}</h3>
        <p>${restaurant.address}</p>
        `);
    });
}
getmap()
