
// Initialize and add the map
function initMap() {
    // The location of Ballarat
    var ballarat = { lat: -37.56622, lng: 143.84957 };
    // The map, centered at Ballarat
    var map = new google.maps.Map(
        document.getElementById('Ballarat-map'), { zoom: 10, center: ballarat });
    // The marker, positioned at Ballarat
    var marker = new google.maps.Marker({ position: ballarat, map: map });

    map.setOptions({ minZoom: 10, maxZoom: 15 });
}
