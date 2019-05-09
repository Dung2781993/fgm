//Filtering Healthcare facilities and display on the map 

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

//Display all healthcare in Geelong

for (var g = 0; g < 11; g++) {
    var allHealthName = geelong_all_healthcare.name[g];
    var allHealthLat = geelong_all_healthcare.lat[g];
    var allHealthLong = geelong_all_healthcare.long[g];
    var allHealthMarker = L.marker([allHealthLat, allHealthLong]).addTo(map);
    allHealthMarker.bindPopup(allHealthName).openPopup();
}

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

    if (select === "All Healthcare Service") {
        for (var g = 0; g < 11; g++) {
            var allHealthName = geelong_all_healthcare.name[g];
            var allHealthLat = geelong_all_healthcare.lat[g];
            var allHealthLong = geelong_all_healthcare.long[g];
            var allHealthMarker = L.marker([allHealthLat, allHealthLong]).addTo(map);
            allHealthMarker.bindPopup(allHealthName).openPopup();
        }
    }

    if (select === "Emergency Hospital") {
        //Insert primary Description
        addHealthDescription(select);
        for (var i = 0; i < 5; i++) {
            var emergencyName = geelong_emergency_hospital.name[i];
            var emergencyLat = geelong_emergency_hospital.lat[i];
            var emergencyLong = geelong_emergency_hospital.long[i];
            var emergencyMarker = L.marker([emergencyLat, emergencyLong]).addTo(map);
            emergencyMarker.bindPopup("<b>" + emergencyName + "</b>" + "<br>Address: " + geelong_emergency_hospital.location[i]).openPopup();
        }
    }
    if (select === "Maternal & Childcare") {
        //Insert primary Description
        addHealthDescription(select);
        for (var j = 0; j < 5; j++) {
            var maternalName = geelong_maternal_and_child_health_service.name[j];
            var maternalLat = geelong_maternal_and_child_health_service.lat[j];
            var maternalLong = geelong_maternal_and_child_health_service.long[j];
            var maternalMarker = L.marker([maternalLat, maternalLong]).addTo(map);
            maternalMarker.bindPopup(maternalName).openPopup();
        }
    }
    
});


function addHealthDescription(type) {
    if (type === "Emergency Hospital") {
        $('#healthDescription').append(
            '<ul id="healthDescriptionDetail">' +
            '<li>' +
            '<p class="mapDetail">' +
            'Geelong Hospital is a public hospital and is part of the Barwon Health. It is the largest hospital in regional Victoria and the only tertiary hospital outside the metropolitan. It has got both medical and surgical units.' +
            ' For more information: <a href="https://www.barwonhealth.org.au">https://www.barwonhealth.org.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'St John of God Health Care is a private hospital founded in 1871. It is Australian largest Catholic not -for-profit private hospital group.' +
            ' For more information: <a href="https://www.sjog.org.au">https://www.sjog.org.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Grace McKellar Centre is a part of the Barwon Health and is an aged care, nursing hospital.' +
            ' For more information: <a href="https://www.sjog.org.au">https://www.sjog.org.au</a>' +
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
            'Drysdale hospital' +
            ' For more information: <a href="https://www.drysdaleclinic.com.au">https://www.drysdaleclinic.com.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'St Leonards hospital' +
            ' For more information: <a href="https://stleonardshospital.com">https://stleonardshospital.com</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Portarlington hospital' +
            ' For more information: <a href="http://www.medicentreportarlington.ie">http://www.medicentreportarlington.ie</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }

}