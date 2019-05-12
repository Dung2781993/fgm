//Filtering education facilities and display on the map 
//Initial Map
var mapOptions = {
    center: [-37.56622, 143.84957],
    zoom: 10
};

var map = new L.map('mapEducation', mapOptions);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 8,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
}).addTo(map);

//Ballarat
$('#educationSearch').click(function () {
    //Remove Description
    $('#description').find('#descriptionDetail').remove();

    var select = $('#educationList :selected').text();
    var container = L.DomUtil.get('mapEducation');
    if (container !== null) { container._leaflet_id = null; }
    //Initial Map
    var mapOptions = {
        center: [-37.56622, 143.84957],
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
        for (var i = 0; i < 5; i++) {
            var primaryName = ballarat_primary_school.name[i];
            var primaryLat = ballarat_primary_school.lat[i];
            var primaryLong = ballarat_primary_school.long[i];
            var primaryMarker = L.marker([primaryLat, primaryLong]).addTo(map);
            primaryMarker.bindPopup("<b>" + primaryName + "</b>" + "<br>Address: " + ballarat_primary_school.location[i]).openPopup();
        }
    }
    
    if (select === "Secondary School") {
        //Insert Secondary Description
        addDescription(select);
        for (var j = 0; j < 5; j++) {
            var secondaryName = ballarat_secondary_school.name[j];
            var secondaryLat = ballarat_secondary_school.lat[j];
            var secondaryLong = ballarat_secondary_school.long[j];
            var secondaryMarker = L.marker([secondaryLat, secondaryLong]).addTo(map);
            secondaryMarker.bindPopup("<b>" + secondaryName + "</b>" + "<br>Address: " + ballarat_secondary_school.location[j]).openPopup();
        }
    }
    
    if (select === "Tertiary") {
        //Insert Tertiary Description
        addDescription(select);
        for (var h = 0; h < 2; h++) {
            var tertiaryName = ballarat_tertiary.name[h];
            var tertiaryLat = ballarat_tertiary.lat[h];
            var tertiaryLong = ballarat_tertiary.long[h];
            var tertiaryMarker = L.marker([tertiaryLat, tertiaryLong]).addTo(map);
            tertiaryMarker.bindPopup(tertiaryName).openPopup();
        }
        
    }
    
});

function addDescription(type) {
    if (type === "Primary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'PRIMARY SCHOOLS:' +
            '</p>' +
            '<p class="mapDetail">' +
            'The primary schools offer education from year 1 to 6. All the schools focus on nurturing the primary years of children with values, friendship and education. Below is the description of top 5 primary schools in Ballarat.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Alfredton is a Government owned, co-educational primary school.' +
            ' For more information: <a href="https://www.alfredtonps.vic.edu.au">https://www.alfredtonps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Sebastopol is a Government owned, co-educational primary school established in 1978.' +
            ' For more information: <a href="https://www.sebasps.vic.edu.au">https://www.sebasps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat North is a Government owned, co-educational primary school established in 1953.' +
            ' For more information: <a href="http://ballaratnthps.vic.edu.au/">http://ballaratnthps.vic.edu.au/</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Dana Street is a Government owned, co-educational primary school established in 1857.' +
            ' For more information: <a href="http://www.danaps.vic.edu.au">http://www.danaps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Black Hill is a Government owned, co-educational primary school established in 1881.' +
            ' For more information: <a href="http://www.blackhillps.vic.edu.au">http://www.blackhillps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Secondary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'SECONDARY SCHOOLS:' +
            '</p>' +
            '<p class="mapDetail">' +
            'The secondary schools offer education from year 7 to 12. All the secondary schools in Ballarat are co-educational and offer a wide range of co-curricular activities focused on sports and music. Below is the description of top 5 secondary schools in Ballarat.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat High School is a public, co-educational, day school which was established in 1907.' +
            ' For more information: <a href="http://www.ballaraths.vic.edu.au">http://www.ballaraths.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Mount Clear College is a state, co-educational, day school which was established in 1976.' +
            ' For more information: <a href="https://mountclearcollege.vic.edu.au">https://mountclearcollege.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat Secondary College- Barkly Street is a public, co-educational, day school which was established in 1993.' +
            ' For more information: <a href="http://www.ballaratsc.vic.edu.au">http://www.ballaratsc.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Ballarat Secondary College - East is a public, co-educational, day school which was established in 1993.' +
            ' For more information: <a href="http://www.ballaratsc.vic.edu.au">http://www.ballaratsc.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Phoenix Community College - Senior Campus is a state co-educational, day school which was established in 2011.' +
            ' For more information: <a href="http://www.sebas.vic.edu.au">http://www.sebas.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Tertiary") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'TERTIARY SCHOOLS:' +
            '</p>' +
            '<p class="mapDetail">' +
            'Ballarat has three main tertiary schools one is the Ballarat University which merged with Federation University in 2003 and the third one is Australian Catholic University.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Federation University is a public university, founded in 1870 and has 5 other campuses apart from the one in Ballarat.' +
            ' For more information: <a href="https://federation.edu.au">https://federation.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Australian Catholic University is a public university founded in 1991 with seven campuses in urban, rural and suburban regions with one in Ballarat.' +
            ' For more information: <a href="https://www.acu.edu.au">https://www.acu.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }

}