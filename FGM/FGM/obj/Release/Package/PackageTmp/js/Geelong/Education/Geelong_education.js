//Filtering education facilities and display on the map 

//Geelong
$('#educationSearch').click(function () {
    //Remove Description
    $('#description').find('#descriptionDetail').remove();

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
        minZoom: 8,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
    }).addTo(map);

    if (select === "Primary School") {
        //Insert primary Description
        addDescription(select);
        for (var j = 0; j < 5; j++) {
            var primaryName = geelong_primary_school.name[j];
            var primaryLat = geelong_primary_school.lat[j];
            var primaryLong = geelong_primary_school.long[j];
            var primaryMarker = L.marker([primaryLat, primaryLong]).addTo(map);
            primaryMarker.bindPopup(primaryName).openPopup();
        }
    }
    if (select === "Secondary School") {
        addDescription(select);
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

function addDescription(type) {
    if (type === "Primary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<li>' +
            '<p class="mapDetail">' +
            'Geelong East is a Government owned, co - educational primary school established in 1857.' +
            ' For more information: <a href="For more information: http://geeastps.vic.edu.au/">http://geeastps.vic.edu.au/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'South Geelong is Government owned , co-educational primary school established in 1879.' +
            ' For more information: <a href="For more information: http://gsps.vic.edu.au">http://gsps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Moolap South Geelong is Government owned, co-educational primary school established in 1879.' +
            ' For more information: <a href="For more information: http://gsps.vic.edu.au">http://gsps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Wallington is Government owned, co-educational primary school established in 1866.' +
            ' For more information: <a href="For more information: https://www.wallington-ps.vic.edu.au">https://www.wallington-ps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Montpellier Government owned, co-educational primary school established in 1969.' +
            ' For more information: <a href="For more information: http://www.montpellierps.vic.edu.au">http://www.montpellierps.vic.edu.au (edited)</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Secondary School") {
        $('#description').append(
            '<p class="mapDetail">' +
            'The secondary schools offer education from year 7 to 12. All the secondary schools in Geelong are co-educational and offer a wide range of co-curricular activities focused on sports and music. Below is the description of top 5 secondary schools in Geelong.'+
            '</p>'+
            '<ul id="descriptionDetail">' +
            '<li>' +
            '<p class="mapDetail">' +
            'Geelong Grammar is a private, co-educational secondary school which was established in 1855.' +
            ' For more information: <a href="For more information: https://www.ggs.vic.edu.au">https://www.ggs.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Kardinia International is a private, co-educational junior and senior school which was established in 1855.' +
            ' For more information: <a href="For more information: https://www.kardinia.vic.edu.au/about/welcome/">https://www.kardinia.vic.edu.au/about/welcome/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Clonard College is a Kildare Education Ministries, co-educational Catholic School which was established in 1956.' +
            ' For more information: <a href="For more information: http://web.clonard.catholic.edu.au">http://web.clonard.catholic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'The Geelong College is an independent, co-educational, day and boarding school which was established in 1886.' +
            ' For more information: <a href="For more information: https://www.geelongcollege.vic.edu.au">https://www.geelongcollege.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Sacred Heart College is a private Roman Catholic, only girls, secondary school which was established in 1861.' +
            ' For more information: <a href="For more information: http://www.shcgeelong.catholic.edu.au">http://www.shcgeelong.catholic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
}