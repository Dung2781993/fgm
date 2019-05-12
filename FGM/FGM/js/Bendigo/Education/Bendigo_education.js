//Filtering education facilities and display on the map 

//Bendigo

//Initial Map
var mapOptions = {
    center: [-36.75818, 144.28024],
    zoom: 10
};

var map = new L.map('mapEducation', mapOptions);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 8,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
}).addTo(map);

$('#educationSearch').click(function () {
    //Remove Description
    $('#description').find('#descriptionDetail').remove();

    var select = $('#educationList :selected').text();
    var container = L.DomUtil.get('mapEducation');
    if (container !== null) { container._leaflet_id = null; }
    //Initial Map
    var mapOptions = {
        center: [-36.75818, 144.28024],
        zoom: 10
    };

    var map = new L.map('mapEducation', mapOptions);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
    }).addTo(map);

    if (select === "Primary School") {
        //Insert primary Description
        addDescription(select);
        for (var i = 0; i < 4; i++) {
            var primaryName = bendigo_primary_school.name[i];
            var primaryLat = bendigo_primary_school.lat[i];
            var primaryLong = bendigo_primary_school.long[i];
            var primaryMarker = L.marker([primaryLat, primaryLong]).addTo(map);
            primaryMarker.bindPopup("<b>" + primaryName + "</b>" + "<br>Address: " + bendigo_primary_school.location[i]).openPopup();
        }
    }

    if (select === "Secondary School") {
        //Insert Secondary Description
        addDescription(select);
        for (var j = 0; j < 3; j++) {
            var secondaryName = bendigo_secondary_school.name[j];
            var secondaryLat = bendigo_secondary_school.lat[j];
            var secondaryLong = bendigo_secondary_school.long[j];
            var secondaryMarker = L.marker([secondaryLat, secondaryLong]).addTo(map);
            secondaryMarker.bindPopup("<b>" + secondaryName + "</b>" + "<br>Address: " + bendigo_secondary_school.location[j]).openPopup();
        }
    }

    if (select === "Tertiary") {
        //Insert Tertiary Description
        addDescription(select);
        for (var h = 0; h < 2; h++) {
            var tertiaryName = bendigo_tertiary.name[h];
            var tertiaryLat = bendigo_tertiary.lat[h];
            var tertiaryLong = bendigo_tertiary.long[h];
            var tertiaryMarker = L.marker([tertiaryLat, tertiaryLong]).addTo(map);
            tertiaryMarker.bindPopup("<b>" + secondaryName + "</b>" + "<br>Address: " + bendigo_secondary_school.location[h]).openPopup();
        }

    }

});

function addDescription(type) {
    if (type === "Primary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'The primary schools offer education from year 1 to 6. All the schools focus on nurturing the primary years of children with values, friendship and education. Below is the description of top 4 primary schools in Bendigo' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Little Bendigo Primary School is a co-educational, private school.' +
            ' For more information: <a href="http://littlebendigops.vic.edu.au/">http://littlebendigops.vic.edu.au/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Big Hill Primary School is a co-educational school which was established 1877.' +
            ' For more information: <a href="http://www.bighillps.vic.edu.au/">http://www.bighillps.vic.edu.au/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Maiden Gully Primary School is a co-educational, private primary school.' +
            ' For more information: <a href="http://www.maidengullyps.com.au/">http://www.maidengullyps.com.au/</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Spring Gully Primary School is a co-educational school which was was established in 1906.' +
            ' For more information: <a href="https://www.sgps.vic.edu.au">https://www.sgps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Secondary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'The secondary schools usually offer education from year 7 to 12. All the secondary schools in Bendigo are co-educational and offer a wide range of co-curricular activities focused on sports and music. Below is the description of top 3 secondary schools in Bendigo:' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Bendigo Senior Secondary College is a co-educational secondary school established in 1907.' +
            ' For more information: <a href="http://www.bssc.edu.au">http://www.bssc.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Bendigo South East Secondary College is a co-educational secondary school that offers education for year  7-10 and was established in 2009.' +
            ' For more information: <a href="https://www.bse.vic.edu.au">https://www.bse.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Weeroona Secondary College is a co-educational secondary school that offers education for year  7-10.' +
            ' For more information: <a href="http://www.weeroona.vic.edu.au">http://www.weeroona.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Tertiary") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'The tertiary education in Bendigo is dominated by two educational hubs that are Monash University and La Trobe University.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Latrobe University  established in 1964. It offers diverse range of courses from IT to science and from arts to law.' +
            ' For more information: <a href="https://www.latrobe.edu.au/bendigo">https://www.latrobe.edu.au/bendigo</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Monash University School of Rural Health is ranked amongst the top 50 universities world wide providing health and clinical practice.' +
            ' For more information: <a href="https://www.monash.edu/medicine/srh/bendigo">https://www.monash.edu/medicine/srh/bendigo</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }

}