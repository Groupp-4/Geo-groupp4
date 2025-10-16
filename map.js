var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

    var line = turf.lineString([
  [-97.94, 29.885],
  [-97.935, 29.888],
  [-97.93, 29.892]
]);

L.geoJSON(line, {
  style: { color: 'red', weight: 4 }
}).addTo(map);