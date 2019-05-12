//Filtering Healthcare facilities and display on the map 
//Initial Map
var mapOptions = {
    center: [-37.56622, 143.84957],
    zoom: 10
};

var map = new L.map('mapHospital', mapOptions);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 8,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
}).addTo(map);


$('#healthSearch').click(function () {
    //Remove Description
    $('#healthDescription').find('#healthDescriptionDetail').remove();

    var select = $('#healthList :selected').text();
    var container = L.DomUtil.get('mapHospital');
    if (container !== null) { container._leaflet_id = null; }
    //Initial Map
    var mapOptions = {
        center: [-37.56622, 143.84957],
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
        //addHealthDescription(select);
        for (var i = 0; i < 2; i++) {
            var emergencyName = ballarat_emergency_hospital.name[i];
            var emergencyLat = ballarat_emergency_hospital.lat[i];
            var emergencyLong = ballarat_emergency_hospital.long[i];
            var emergencyMarker = L.marker([emergencyLat, emergencyLong]).addTo(map);
            emergencyMarker.bindPopup(emergencyName).openPopup();
        }
    }
    if (select === "Maternal & Childcare") {
        
        //Insert primary Description
        //addHealthDescription(select);
        for (var j = 0; j < 4; j++) {
            var maternalName = ballarat_maternal_and_child_health_service.name[j];
            var maternalLat = ballarat_maternal_and_child_health_service.lat[j];
            var maternalLong = ballarat_maternal_and_child_health_service.long[j];
            var maternalMarker = L.marker([maternalLat, maternalLong]).addTo(map);
            maternalMarker.bindPopup("<b>" + maternalName + "</b>" + "<br>Address: " + ballarat_maternal_and_child_health_service.location[i]).openPopup();
        }
        
    }
});

function addHealthDescription(type) {
    if (type === "Emergency Hospital") {
        $('#healthDescription').append(
            '<ul id="healthDescriptionDetail">' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat Health Services is a public hospital that was established in 1997 when the Ballarat Base Hospital merged with the Queen Elizabeth Centre and the Grampians Psychiatric Service.' +
            ' For more information: <a href="https://bhs.org.au">https://bhs.org.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Buninyong is focused on cancer treatment but treats other ailments as well.' +
            ' For more information: <a href="https://www.hospitalby.com/australia-hospital/buninyong-hospital/">https://www.hospitalby.com/australia-hospital/buninyong-hospital/</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Maternal & Childcare") {
        $('#healthDescription').append(
            '<ul id="healthDescriptionDetail">' +
            '<li>' +
            '<p class="mapDetail">' +
            'Sebastopol is a private hospital and is a part of the Tristar Medical Group.' +
            ' For more information: <a href="https://www.tristarmedicalgroup.com.au/tristar-clinics/sebastopol/">https://www.tristarmedicalgroup.com.au/tristar-clinics/sebastopol/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat Community Health is a public organisation that was established in 2001.' +
            ' For more information: <a href="https://bchc.org.au/">https://bchc.org.au/</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }

}