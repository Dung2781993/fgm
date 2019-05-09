//Filtering education facilities and display on the map 
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

//Display all educations in Geelong
for (var g = 0; g < 20; g++) {
    var allEducationName = geelong_all_eduction.name[g];
    var allEducationLat = geelong_all_eduction.lat[g];
    var allEducationLong = geelong_all_eduction.long[g];
    var primaryMarker = L.marker([allEducationLat, allEducationLong]).addTo(map);
    primaryMarker.bindPopup(allEducationName).openPopup();
}


//Geelong
$('#educationSearch').click(function () {
    //Remove Description
    $('#description').find('#descriptionDetail').remove();

    var select = $('#educationList :selected').text();
    var container = L.DomUtil.get('mapEducation');
    if (container !== null) { container._leaflet_id = null; }

    if (select === "All Education Facilities") {
        for (var g = 0; g < 20; g++) {
            var allEducationName = geelong_all_eduction.name[g];
            var allEducationLat = geelong_all_eduction.lat[g];
            var allEducationLong = geelong_all_eduction.long[g];
            var primaryMarker = L.marker([allEducationLat, allEducationLong]).addTo(map);
            primaryMarker.bindPopup(allEducationName).openPopup();
        }
    }
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
        //Insert Secondary Description
        addDescription(select);
        for (var i = 0; i < 5; i++) {
            var secondaryName = geelong_secondary_school.name[i];
            var secondaryLat = geelong_secondary_school.lat[i];
            var secondaryLong = geelong_secondary_school.long[i];
            var secondaryMarker = L.marker([secondaryLat, secondaryLong]).addTo(map);
            secondaryMarker.bindPopup(secondaryName).openPopup();
        }
    }
    if (select === "Advanced Colleges") {
        //Insert Advanced Description
        addDescription(select);
        for (var k = 0; k < 5; k++) {
            var advancedName = geelong_advanced_colleges.name[k];
            var advancedLat = geelong_advanced_colleges.lat[k];
            var advancedLong = geelong_advanced_colleges.long[k];
            var advancedMarker = L.marker([advancedLat, advancedLong]).addTo(map);
            advancedMarker.bindPopup(advancedName).openPopup();
        }
    }
    if (select === "Tertiary") {
        //Insert Tertiary Description
        addDescription(select);
        for (var h = 0; h < 5; h++) {
            var tertiaryName = geelong_tertiary.name[h];
            var tertiaryLat = geelong_tertiary.lat[h];
            var tertiaryLong = geelong_tertiary.long[h];
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
            'The primary schools offer education from year K to 6. All the schools focus on nurturing the primary years of children with values, friendship and education. Below is the description of top 5 primary schools in Geelong.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Geelong East is a Government owned, co - educational primary school established in 1857.' +
            ' For more information: <a href="http://geeastps.vic.edu.au/">http://geeastps.vic.edu.au/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'South Geelong is Government owned , co-educational primary school established in 1879.' +
            ' For more information: <a href="http://gsps.vic.edu.au">http://gsps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Moolap South Geelong is Government owned, co-educational primary school established in 1879.' +
            ' For more information: <a href="http://gsps.vic.edu.au">http://gsps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Wallington is Government owned, co-educational primary school established in 1866.' +
            ' For more information: <a href="https://www.wallington-ps.vic.edu.au">https://www.wallington-ps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Montpellier Government owned, co-educational primary school established in 1969.' +
            ' For more information: <a href="http://www.montpellierps.vic.edu.au">http://www.montpellierps.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Secondary School") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'The secondary schools offer education from year 7 to 12. All the secondary schools in Geelong are co-educational and offer a wide range of co-curricular activities focused on sports and music. Below is the description of top 5 secondary schools in Geelong.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Geelong Grammar is a private, co-educational secondary school which was established in 1855.' +
            ' For more information: <a href="https://www.ggs.vic.edu.au">https://www.ggs.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Kardinia International is a private, co-educational junior and senior school which was established in 1855.' +
            ' For more information: <a href="https://www.kardinia.vic.edu.au/about/welcome/">https://www.kardinia.vic.edu.au/about/welcome/</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Clonard College is a Kildare Education Ministries, co-educational Catholic School which was established in 1956.' +
            ' For more information: <a href="http://web.clonard.catholic.edu.au">http://web.clonard.catholic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'The Geelong College is an independent, co-educational, day and boarding school which was established in 1886.' +
            ' For more information: <a href="https://www.geelongcollege.vic.edu.au">https://www.geelongcollege.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Sacred Heart College is a private Roman Catholic, only girls, secondary school which was established in 1861.' +
            ' For more information: <a href="http://www.shcgeelong.catholic.edu.au">http://www.shcgeelong.catholic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Tertiary") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'More than 27,000 students are enrolled in tertiary schools in Geelong. The two main education hubs are Deakin University and Gordon Institute.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Deakin University is a public university which was established in 1974. It offer both undergraduate and postgraduate courses. It has four campuses out of which two are in Geelong in Waterfront and Waurn Ponds. It is one of the fastest growing research universities in Australia.' +
            ' For more information: <a href="https://www.deakin.edu.au">https://www.deakin.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Gordon Institute is a TAFE institute ie. technical and further education and was established in 1887. It has three campuses in Geelong and East Geelong located in Moorabool and Boundary Road. The institution also provides facility of an English learning centre.' +
            ' For more information: <a href="https://www.thegordon.edu.au">https://www.thegordon.edu.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }
    if (type === "Advanced Colleges") {
        $('#description').append(
            '<ul id="descriptionDetail">' +
            '<p class="mapDetail">' +
            'Advanced colleges provide flexible, hands-on training to students in different domains such as agriculture, nursing and fitness so that they can utilise those skills in their work. Some of the institutions also impart knowledge related to religion and scriptures as well.' +
            '</p>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Reformed Theological College is a co-educational advanced college, founded in 1954 and focuses on education related to understanding of biblical scriptures.' +
            ' For more information: <a href="http://www.rtc.edu.au">http://www.rtc.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Marcus Oldham College is a private institute founded in 1962 which focus on farm management and agribusiness courses.' +
            ' For more information: <a href="https://marcusoldham.vic.edu.au">https://marcusoldham.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Victorian Fitness Academy is a private institute that provides diploma courses in sports management.' +
            ' For more information: <a href="https://vfalearning.vic.edu.au">https://vfalearning.vic.edu.au</a>' +
            '</p >' +
            '</li>' +
            '<li>' +
            '<p class="mapDetail">' +
            'Centre of Excellence is a hairdressing and beauty college which was established in 1981.' +
            ' For more information: <a href="http://www.thecentreofexcellence.com.au">http://www.thecentreofexcellence.com.au</a>' +
            '</p >' +
            '</li>' +
            '</ul>'
        );
    }

}