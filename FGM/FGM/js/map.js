// Creating map options



//Geelong
$("#Geelong").click(function () {

    $('#search').click(function () {
        var select = $('#mylist :selected').text();
        var container = L.DomUtil.get('map');
        if (container !== null) { container._leaflet_id = null; }

        //Initial Map

        var mapOptions = {
            center: [-38.14711, 144.36069],
            zoom: 10
        };


        var map = new L.map('map', mapOptions);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
        }).addTo(map);

        if (select === "Health Services") {
            var catalogo = MCH;
            for (var i = 0; i < 5; i++) {
                var name = catalogo.name[i];
                var lat = catalogo.lat[i];
                var long = catalogo.long[i];
                var marker = L.marker([lat, long]).addTo(map);
                marker.bindPopup(name).openPopup();
            }
        }
        if (select === "Education"){
            for (var j = 0; j < 5; j++) {
                var educationName = school.name[j];
                var educationLat = school.lat[j];
                var educationLong = school.long[j];
                var educationMarker = L.marker([educationLat, educationLong]).addTo(map);
                educationMarker.bindPopup(educationName).openPopup();
            }

        }
    });
});

//Bendigo
$("#Bendigo").click(function () {
        
    
    var container = L.DomUtil.get('map');
    if(container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-36.757786, 144.278702],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});

//Ballarat
$("#Ballarat").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-37.56622, 143.84957],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});


//Latrobe
$("#Latrobe").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-38.2556, 146.4720],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});

//Warrnambol
$("#Warrnambol").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-38.3687, 142.4982],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});


//Shepparton
$("#Shepparton").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-36.38047, 145.39867],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});

//wangaratta

$("#Wangaratta").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-36.3683, 146.3172],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});


//Default Map

/*
var mapOptions = {
    center: [-38.14711, 144.36069],
    zoom: 10
};

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

*/


/*
var mapOptions = {
    center: [-38.14711, 144.36069],
    zoom: 10
};


var map = new L.map('map', mapOptions);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
}).addTo(map);


var catalogo = MCH;
for (var i = 0; i < 5; i++) {
    var name = catalogo.name[i];
    var lat = catalogo.lat[i];
    var long = catalogo.long[i];
    var marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup(name).openPopup();
}
*/


