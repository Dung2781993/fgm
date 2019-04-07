// Creating map options



//Geelong
$("#Geelong").click(function () {

    
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }


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



