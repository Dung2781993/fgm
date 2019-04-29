//Filtering Healthcare facilities and display on the map 
$('#healthSearch').click(function () {
    //Remove Description
    $('#healthDescription').find('#healthDescriptionDetail').remove();

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

    if (select === "Emergency Hospital") {
        //Insert primary Description
        addHealthDescription(select);
        for (var i = 0; i < 2; i++) {
            var emergencyName = bendigo_emergency_hospital.name[i];
            var emergencyLat = bendigo_emergency_hospital.lat[i];
            var emergencyLong = bendigo_emergency_hospital.long[i];
            var emergencyMarker = L.marker([emergencyLat, emergencyLong]).addTo(map);
            emergencyMarker.bindPopup("<b>" + emergencyName + "</b>" + "<br>Address: " + bendigo_emergency_hospital.location[i]).openPopup();
        }
    }

});


function addHealthDescription(type) {
    if (type === "Emergency Hospital") {
        $('#healthDescription').append(
            '<ul id="healthDescriptionDetail">' +
            '<p class="mapDetail">' +
            'EMERGENCY HOSPITALS:' +
            '</p >' +
            '<li>' +
            '<p class="mapDetail">' +
            'The Bendigo Health is the only public hospital in the entire region. The hospital consists of 2 major campuses, a nursing home, a hospice and a primary health centre.' +
            ' For more information: <a href="https://www.bendigohealth.org.au">https://www.bendigohealth.org.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Bendigo Day Surgery is a private hospital owned and operated by a local medical and health specialist' +
            ' For more information: <a href="http://bendigodaysurgery.com.au">http://bendigodaysurgery.com.au</a>' +
            '</p >' +
            '</ul>'
        );
    }
}