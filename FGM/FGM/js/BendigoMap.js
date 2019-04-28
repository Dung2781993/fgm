
// Initialize and add the map
function initMap() {
    // The location of Bendigo
    var bendigo = { lat: -36.757786, lng: 144.278702 };
    // The map, centered at Bendigo
    var map = new google.maps.Map(
        document.getElementById('Bendigo-map'), { zoom: 10, center: bendigo });
    // The marker, positioned at Bendigo
    var marker = new google.maps.Marker({ position: bendigo, map: map });

    map.setOptions({ minZoom: 10, maxZoom: 15 });
}
