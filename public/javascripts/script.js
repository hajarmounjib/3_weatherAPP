var mymap = L.map('worldmap',
{
 center: [48.866667, 2.333333],
 zoom: 6
}
);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var cities = document.getElementsByClassName('list-group-item');
console.log(cities)
for(var i=0 ;i < cities.length ;i++){
    var lat = cities[i].dataset.lat;
    var lon = cities[i].dataset.lon;
    var city = cities[i].dataset.city

    var customIcon = L.icon({
        iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    
        iconSize:     [38, 95], 
        shadowSize:   [50, 64], 
    
        iconAnchor:   [22, 94], 
        shadowAnchor: [4, 62],  
    
        popupAnchor:  [-3, -76]
    });
    
    L.marker([lat, lon], {icon: customIcon}).addTo(mymap);

    L.marker([lat, lon], {icon: customIcon}).addTo(mymap).bindPopup(city);
    
}

    
