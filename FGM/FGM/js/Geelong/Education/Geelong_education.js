//Filtering education facilities and display on the map 

//Geelong
$('#educationSearch').click(function () {
    var select = $('#educationList :selected').text();
    var container = L.DomUtil.get('mapEducation');
    if (container !== null) { container._leaflet_id = null; }
    //Initial Map
    var mapOptions = {
        center: [-38.14711, 144.36069],
        zoom: 10
    };

    var map = new L.map('mapEducation', mapOptions);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom:8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
    }).addTo(map);

    if (select === "Primary School"){
        for (var j = 0; j < 5; j++) {
            var primaryName = geelong_primary_school.name[j];
            var primaryLat = geelong_primary_school.lat[j];
            var primaryLong = geelong_primary_school.long[j];
            var primaryMarker = L.marker([primaryLat, primaryLong]).addTo(map);
            primaryMarker.bindPopup(primaryName).openPopup();
        }
    }
    if (select === "Secondary School") {
        for (var i = 0; i < 5; i++) {
            var secondaryName = geelong_secondary_school.name[i];
            var secondaryLat = geelong_secondary_school.lat[i];
            var secondaryLong = geelong_secondary_school.long[i];
            var secondaryMarker = L.marker([secondaryLat, secondaryLong]).addTo(map);
            secondaryMarker.bindPopup(secondaryName).openPopup();
        }
    }
    if (select === "Advanced School") {
        for (var k = 0; k < 5; k++) {
            var advancedName = geelong_advanced_colleges.name[k];
            var advancedLat = geelong_advanced_colleges.lat[k];
            var advancedLong = geelong_advanced_colleges.long[k];
            var advancedMarker = L.marker([advancedLat, advancedLong]).addTo(map);
            advancedMarker.bindPopup(advancedName).openPopup();
        }
    }
    if (select === "Tertiary") {
        for (var h = 0; h < 5; h++) {
            var tertiaryName = geelong_tertiary.name[h];
            var tertiaryLat = geelong_tertiary.lat[h];
            var tertiaryLong = geelong_tertiary.long[h];
            var tertiaryMarker = L.marker([tertiaryLat, tertiaryLong]).addTo(map);
            tertiaryMarker.bindPopup(tertiaryName).openPopup();
        }
    }
    if (select === "Special Need") {
        for (var g = 0; g < 5; g++) {
            var SpecialName = geelong_special_needs_school.name[g];
            var SpecialLat = geelong_special_needs_school.lat[g];
            var SpecialLong = geelong_special_needs_school.long[g];
            var SpecialMarker = L.marker([SpecialLat, SpecialLong]).addTo(map);
            SpecialMarker.bindPopup(SpecialName).openPopup();
        }
    }
});