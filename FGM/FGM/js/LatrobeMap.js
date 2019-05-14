
// Initialize and add the map
function initMap() {
    // The location of latrobe
    var latrobe = { lat: -38.2333324, lng: 146.3999984 };
    // The map, centered at latrobe
    var map = new google.maps.Map(
        document.getElementById('latrobe-map'), { zoom: 10, center: latrobe });
    // The marker, positioned at latrobe
    var marker = new google.maps.Marker({ position: latrobe, map: map });

    map.setOptions({ minZoom: 10, maxZoom: 15 });
}
