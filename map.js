
  var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    
var polygon = turf.polygon([[
  [-97.94, 29.885],
  [-97.935, 29.885],
  [-97.935, 29.890],
  [-97.94, 29.890], 
  [-97.94, 29.885]  
]]);

L.geoJSON(polygon, {
  style: {
    color: 'green', 
    weight: ,
    fillColor: 'lightgreen',
    fillOpacity: 0.5
  }
}).addTo(map);
