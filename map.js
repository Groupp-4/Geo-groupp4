var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);


//create point in san marcos airport w buffer 3miles)
var point = turf.point([-97.93393, 29.8878]);
var buffered = turf.buffer(point, 3, { units: "miles" });

//add the point and buffer to the OpenStreetMap
L.geoJSON(point).addTo(map);
L.geoJSON(buffered).addTo(map);
