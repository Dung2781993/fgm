//Filtering Healthcare facilities and display on the map 


$('#healthSearch').click(function () {
    var select = $('#healthList :selected').text();
    var container = L.DomUtil.get('mapHospital');
    if (container !== null) { container._leaflet_id = null; }
    //Initial Map
    var mapOptions = {
        center: [-38.14711, 144.36069],
        zoom: 10
    };

    var map = new L.map('mapHospital', mapOptions);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
    }).addTo(map);

    if (select === "EMERGENCY Hospital") {
        for (var i = 0; i < 5; i++) {
            var emergencyName = geelong_emergency_hospital.name[i];
            var emergencyLat = geelong_emergency_hospital.lat[i];
            var emergencyLong = geelong_emergency_hospital.long[i];
            var emergencyMarker = L.marker([emergencyLat, emergencyLong]).addTo(map);
            emergencyMarker.bindPopup(emergencyName).openPopup();
        }
    }
    if (select === "MATERNAL & CHILDCARE") {
        for (var j = 0; j < 5; j++) {
            var maternalName = geelong_maternal_and_child_health_service.name[j];
            var maternalLat = geelong_maternal_and_child_health_service.lat[j];
            var maternalLong = geelong_maternal_and_child_health_service.long[j];
            var maternalMarker = L.marker([maternalLat, maternalLong]).addTo(map);
            maternalMarker.bindPopup(maternalName).openPopup();
        }
    }
});