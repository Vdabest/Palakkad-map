// Create a map centered at Palakkad
var map = L.map('map').setView([10.7868, 76.6542], 12);

// Load map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for locations
var locations = [
    {name: "Palakkad Fort", lat: 10.7868, lon: 76.6542},
    {name: "Malampuzha Dam", lat: 10.7768, lon: 76.6422},
    {name: "Silent Valley National Park", lat: 11.1235, lon: 76.4461},
    {name: "Dhoni Waterfalls", lat: 10.8212, lon: 76.5812}
];

locations.forEach(function(loc) {
    L.marker([loc.lat, loc.lon])
        .addTo(map)
        .bindPopup(loc.name);
});

