
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var geelong = { lat: -38.1499994, lng: 144.3499986 };
    // The map, centered at Geelong
    var map = new google.maps.Map(
        document.getElementById('Geelong-map'), { zoom: 10, center: geelong });
    // The marker, positioned at Geelong
    var marker = new google.maps.Marker({ position: geelong, map: map });

    map.setOptions({ minZoom: 10, maxZoom: 15 });
}
